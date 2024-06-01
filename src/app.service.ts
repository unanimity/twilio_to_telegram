import { Injectable } from '@nestjs/common';
import {version} from "../package.json";
import {description} from "../package.json";
@Injectable()
export class AppService {
  getInformation(): string {
    return `Twilio to telegram gateway<br>Description: ${description}<br>Version: ${version}`;
  }
}
