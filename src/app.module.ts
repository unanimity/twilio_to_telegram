import { Module } from '@nestjs/common';
import { TwilioController } from './twilio.controller';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram.service';
import {TwilioService} from "./twilio.service";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TwilioController],
  providers: [TwilioService, TelegramService],
})
export class AppModule {}
