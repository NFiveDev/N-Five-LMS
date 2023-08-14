import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigOptions } from 'express-handlebars/types';
import { create } from 'express-handlebars';

const hbsConfiguration: ConfigOptions = {
  partialsDir: join(__dirname, '..', 'views', 'partials'),
  extname: 'hbs',
  layoutsDir: join(__dirname, '..', 'views', 'layouts'),
};

const hbs = create(hbsConfiguration);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'client/dist'), {
    prefix: '/static',
  });
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('hbs', hbs.engine);
  app.setViewEngine('hbs');
  await app.listen(3000);
}

bootstrap();
