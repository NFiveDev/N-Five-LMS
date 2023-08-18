import { Test, TestingModule } from '@nestjs/testing';
import { CourseControllerController } from './course.controller.controller';

describe('CourseControllerController', () => {
  let controller: CourseControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseControllerController],
    }).compile();

    controller = module.get<CourseControllerController>(
      CourseControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
