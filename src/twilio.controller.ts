import {Body, Controller, Get, Headers, Post, Request} from '@nestjs/common';

import {validateRequest, } from "twilio/lib/webhooks/webhooks";
import {TwilioService} from "./twilio.service";
import {TwilioMessageInterface} from "./twilio.message.interface";
import {TwilioCallInterface} from "./twilio.call.interface";

@Controller()
export class TwilioController {
    constructor(private readonly twilioService: TwilioService) {
    }

    @Get()
    getInformation(): string {
        return this.twilioService.getInformation();
    }

    // A call comes in
    @Post('/call')
    async handleIncomingCalls(
        @Body() body: TwilioCallInterface,
        @Headers('X-TWILIO-SIGNATURE') twilioHeader: string,
        @Request() request: any): Promise<string> {
        if (validateRequest(
            process.env.TWILIO_AUTH_TOKEN,
            twilioHeader,
            `${process.env.PROTOCOL??'https'}://${request.get('Host')}${request.originalUrl}`,
            body)) {
            this.twilioService.handleIncomingCalls(body);
        }
        return '<Response></Response>';
    }

    // A message comes in
    @Post('/message')
    async handleIncomingMessages(
        @Body() body: TwilioMessageInterface,
        @Headers('X-TWILIO-SIGNATURE') twilioHeader: string,
        @Request() request: any): Promise<string> {
        if (validateRequest(
            process.env.TWILIO_AUTH_TOKEN,
            twilioHeader,
            `${process.env.PROTOCOL??'https'}://${request.get('Host')}${request.originalUrl}`,
            body)) {
            this.twilioService.handleIncomingMessages(body);
        }
        return '<Response></Response>';
    }
}
