import {Injectable} from '@nestjs/common';
import * as TelegramBot from "node-telegram-bot-api";

@Injectable()
export class TelegramService {
    private readonly telegramBot: TelegramBot;

    constructor() {
        this.telegramBot = new TelegramBot(process.env.TELEGRAM_HTTP_API_TOKEN, {polling: true});
        this.telegramBot.on('message', this.newMessage);
    }

    private newMessage = (msg: TelegramBot.Message) => {
        console.log('New message in (CHAT_ID): ', msg.chat.id);
        if (!msg.text.search(/.*\/help.*/)) {
            this.telegramBot.sendMessage(process.env.TELEGRAM_CHAT_ID, 'Received your help message.').then().catch(console.error);
        } else {
            this.telegramBot.sendMessage(process.env.TELEGRAM_CHAT_ID, 'Unknown your message.').then().catch(console.error);
        }
    }

    public sendMessage = (text: string) => {
        this.telegramBot.sendMessage(process.env.TELEGRAM_CHAT_ID, text).then().catch(console.error);
    }

}
