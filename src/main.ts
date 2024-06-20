import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';
// import csurf from 'csurf';
// somewhere in your initialization file
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(
    compression({
      filter: (req, res) => {
        if (req.headers['x-no-compression']) {
          return false;
        }
        return compression.filter(req, res);
      },
    }),
  );
  app.use(helmet());
  app.enableCors({
    origin: 'http://localhost:5373/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  // app.use(
  //   csurf({
  //     cookie: true,
  //     httpOnly: true,
  //     secure: false,
  //     key: 'csrfToken',
  //     value: (req) => req.cookies['XSRF-TOKEN'],
  //   }),
  // );
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
