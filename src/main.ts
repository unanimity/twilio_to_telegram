import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

(async (): Promise<any> => {
  const app: INestApplication<any> = await NestFactory.create(AppModule);
  await app.listen(process.env.WEB_HOOK_PORT??7432);
})();
