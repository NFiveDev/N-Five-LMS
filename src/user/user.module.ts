import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schema/user.schema';
import { UserService } from './service/user.service';

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: userSchema}])],
    providers: [UserService]
})
export class UserModule {}
