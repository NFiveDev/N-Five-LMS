import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Course {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  created: Date;

  @Prop()
  authorId: string; //Skal ændres til object ref til users
}

export const CourseSchema = SchemaFactory.createForClass(Course);
