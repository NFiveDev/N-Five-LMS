import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';
import { Model } from 'mongoose';

interface UserDto {
    username: string,
    password: string,
    email: string,
    role?: string
}

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(userDto : UserDto): Promise<User> {
        const created = new this.userModel(userDto);
        return created.save();
    }
}
