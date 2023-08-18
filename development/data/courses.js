/* eslint-disable @typescript-eslint/no-var-requires */
//General object of course   {title: "", description: "", created: Date.now(), authorId: "niklas"}

const mongoose = require('mongoose');

const courseSeeds = [
  { title: 'Javascript Beginner', description: "Embark on your journey into the world of programming with our Beginner Python Course! This comprehensive course is designed to introduce you to the fundamentals of Python, a versatile and beginner-friendly programming language. From writing your first 'Hello, World!' program to mastering basic data structures and control flow, you'll gain the essential skills needed to start building your own Python programs. With interactive lessons, hands-on coding exercises, and real-world examples, you'll develop a strong foundation in Python syntax and concepts. Join us today and unlock the door to endless possibilities in the world of coding!", created: Date.now(), authorId: 'niklas' },
  { title: 'Python Basics', description: "Embark on your journey into the world of programming with our Beginner Python Course! This comprehensive course is designed to introduce you to the fundamentals of Python, a versatile and beginner-friendly programming language. From writing your first 'Hello, World!' program to mastering basic data structures and control flow, you'll gain the essential skills needed to start building your own Python programs. With interactive lessons, hands-on coding exercises, and real-world examples, you'll develop a strong foundation in Python syntax and concepts. Join us today and unlock the door to endless possibilities in the world of coding!", created: Date.now(), authorId: 'niklas' },
  { title: 'Introduction to NodeJS', description: "Embark on your journey into the world of programming with our Beginner Python Course! This comprehensive course is designed to introduce you to the fundamentals of Python, a versatile and beginner-friendly programming language. From writing your first 'Hello, World!' program to mastering basic data structures and control flow, you'll gain the essential skills needed to start building your own Python programs. With interactive lessons, hands-on coding exercises, and real-world examples, you'll develop a strong foundation in Python syntax and concepts. Join us today and unlock the door to endless possibilities in the world of coding!", created: Date.now(), authorId: 'niklas' },
];

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  created: {
   type: Date,
   required: true,
  },
  authorId: {
    type: String,
    required: true
  }
})

const CourseModel = new mongoose.model('Course', courseSchema)

module.exports.courses = courseSeeds;
module.exports.CourseModel = CourseModel;