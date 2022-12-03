import { Injectable } from '@nestjs/common';
import { catchError, from, map } from 'rxjs';
import { CreateFeedbackDto } from 'src/dto/createFeedback.dto';
import { FeedbackEntity } from './../../entities/feedback.entity';

@Injectable()
export class FeedbackService {
  public createFeedBack(feedBackDto: CreateFeedbackDto) {
    return from(FeedbackEntity.insert(feedBackDto)).pipe(
      map((result) => {
        return `Feedback from successfully created`;
      }),
      catchError(() => `Something went wrong ERROR CODE FB10`),
    );
  }
}
