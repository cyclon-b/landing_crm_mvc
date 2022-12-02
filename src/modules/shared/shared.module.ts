import { Module } from '@nestjs/common';
import { CommonDataService } from 'src/providers/common-data/common-data.service';
import { PricingCardsService } from 'src/providers/pricing-cards/pricing-cards.service';



@Module({
  providers: [
    CommonDataService,
    PricingCardsService,
  ],
  exports: [
    CommonDataService,
    PricingCardsService,
  ]
})
export class SharedModule {
}
