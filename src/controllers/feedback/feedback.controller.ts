import { Body, Controller, Post } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateFeedbackDto } from './../../dto/createFeedback.dto';
import { MailService } from './../../mail/providers/mail/mail.service';
import { FeedbackService } from './../../providers/feedback/feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedBackService: FeedbackService, private mail: MailService) {}

  @Post()
  public async createFeedBack(@Body() feedBackDto: CreateFeedbackDto) {
    console.dir(feedBackDto);
    const response = await lastValueFrom(this.feedBackService.createFeedBack(feedBackDto));
    await this.mail.sendMailNotification();
    return { feedBackResult: response };
  }
}
