import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailer: MailerService) {}

  public async sendMailNotification(): Promise<any> {
    await this.mailer.sendMail({
      subject: 'You have a new feedback on your landing!',
      template: '../../templates/notification',
      text: "Let's authorize in admin panel and see our new feedback",
    });
  }
}
