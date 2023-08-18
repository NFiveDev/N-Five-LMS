import { Controller, Render, Get } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('/courses')
export class CourseControllerController {
  constructor(private _courseService: CourseService) { }

  @Get()
  @Render('courses')
  index() {
    const courses = this._courseService.GetAll();
    return {courses: courses}
  }
  


}
