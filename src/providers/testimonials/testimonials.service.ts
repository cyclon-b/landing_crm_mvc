import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { TestimonialEntity } from './../../entities/testimonial.entity';

const DEFAULT_TESTIMONIALS_COUNT = 3;
@Injectable()
export class TestimonialsService {
  public fetchTestimonials(): Observable<TestimonialEntity[]> {
    return from(
      TestimonialEntity.find({
        take: DEFAULT_TESTIMONIALS_COUNT,
      }),
    );
  }
}
