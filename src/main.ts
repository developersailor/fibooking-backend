import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .setTitle('fibooking API')
    .setDescription('The booking API description')
    .setVersion('1.0')
    .addTag('fibooking')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
