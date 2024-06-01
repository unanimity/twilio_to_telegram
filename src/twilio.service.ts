import {Injectable} from '@nestjs/common';
import {description, version} from '../package.json';
import {TwilioMessageInterface} from "./twilio.message.interface";
import {TelegramService} from "./telegram.service";
import {TwilioCallInterface} from "./twilio.call.interface";

@Injectable()
export class TwilioService {


    constructor(private readonly telegramService: TelegramService) {
    }

    getInformation(): string {
        return `Twilio to telegram gateway<br>Description: ${description}<br>Version: ${version}`;
    }

    handleIncomingMessages(twilioRequest: TwilioMessageInterface) {
        return this.telegramService.sendMessage(
            `\n\nNew *SMS*:\n${twilioRequest.From};\n${twilioRequest.Body.toString()};`
        );
    }

    handleIncomingCalls(twilioRequest: TwilioCallInterface) {
        return this.telegramService.sendMessage(
            `\n\nNew *Call*:\n${twilioRequest.From};`
        );
    }
}
