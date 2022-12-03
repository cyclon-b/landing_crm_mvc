import { Module } from '@nestjs/common';
import { CommonDataService } from 'src/providers/common-data/common-data.service';
import { PricingCardsService } from 'src/providers/pricing-cards/pricing-cards.service';
import { NavigationMenuService } from './../../providers/navigation-menu/navigation-menu.service';
import { FeaturesService } from './../../providers/features/features.service';
import { TestimonialsService } from './../../providers/testimonials/testimonials.service';
import { ResponseDataBuilderService } from './../../providers/response-data-builder/response-data-builder.service';
import { FeedbackService } from './../../providers/feedback/feedback.service';
import { MailModule } from './../../mail/mail.module';

@Module({
  imports: [MailModule],

  providers: [
    CommonDataService,
    PricingCardsService,
    NavigationMenuService,
    FeaturesService,
    TestimonialsService,
    ResponseDataBuilderService,
    FeedbackService,
  ],
  exports: [ResponseDataBuilderService, FeedbackService, MailModule],
})
export class SharedModule {}
