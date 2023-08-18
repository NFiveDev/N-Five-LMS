import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel = Model<Course>) {}

  async GetAll(): Promise<Course[]> {
    const courses = this.courseModel.find().exec();
    return courses;
  }
}
