import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );
  const config =
    new DocumentBuilder()
      .setTitle('API Practica backend')
      .setDescription(
        'Documentación'
      )
      .setVersion('1.0')
      .build();
  const document =
    SwaggerModule.createDocument(
      app,
      config
    );

  app.use(
    '/documentacion',
    apiReference({
      content: document,
    }),

  );

  await app.listen(3000);

}

bootstrap();