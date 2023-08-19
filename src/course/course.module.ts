import { Module } from '@nestjs/common';
import { CourseControllerController } from './course.controller.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './schema/course.schema';
import { CourseService } from './course.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  controllers: [CourseControllerController],
  providers: [CourseService],
})
export class CourseModule {}
