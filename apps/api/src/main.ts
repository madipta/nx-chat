import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { CorsSetting } from './cors.setting';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(CorsSetting);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/');
  });
}

bootstrap();
