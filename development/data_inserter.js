/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
const { courses, CourseModel } = require('./data/courses');
const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('begin', function () {
  SeedDB();
});

// Test connect
mongoose
  .connect(
    'mongodb+srv://n5projektet:G9425S4wmoXNfuB9@n5-project.bly8y0o.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Success connect!');
    eventEmitter.emit('begin');
  })
  .catch((err) => {
    console.log('refused to connect', err);
  });

async function insertCourses() {
  await CourseModel.deleteMany({});
  await CourseModel.insertMany(courses);
}

async function SeedDB() {
  insertCourses().then(() => {
    mongoose.connection.close();
  });
}
