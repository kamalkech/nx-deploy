import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);

  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('nx example')
    .setDescription('The nx API description')
    .setVersion('1.0')
    .addTag('nx')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
