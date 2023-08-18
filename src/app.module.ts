import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (cnfService: ConfigService) => ({
        uri: cnfService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    CourseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
