import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    email: string;

    @Prop({
        type: String,
        default: 'student'
    })
    role: 'student' | 'teacher' | 'admin';
}

export const userSchema = SchemaFactory.createForClass(User)