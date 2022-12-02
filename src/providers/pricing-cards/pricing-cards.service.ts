import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { PricingCardEntity } from './../../entities/pricing-card.entity';

@Injectable()
export class PricingCardsService {
  public fetchPricingCards(): Observable<PricingCardEntity[]> {
    return from(
      PricingCardEntity.find({
        relations: {
          cardOptionsList: true,
        },
      }),
    );
  }
}
