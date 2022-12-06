import { Injectable } from '@nestjs/common';
import { forkJoin, map, Observable, takeLast, tap } from 'rxjs';
import { CommonDataService } from 'src/providers/common-data/common-data.service';
import { FeaturesService } from './../features/features.service';
import { NavigationMenuService } from './../navigation-menu/navigation-menu.service';
import { PricingCardsService } from 'src/providers/pricing-cards/pricing-cards.service';
import { TestimonialsService } from './../testimonials/testimonials.service';
import { AppDataModel } from './../../models/app-data.model';

@Injectable()
export class ResponseDataBuilderService {
  constructor(
    private commonData: CommonDataService,
    private features: FeaturesService,
    private navigation: NavigationMenuService,
    private pricingCards: PricingCardsService,
    private testimonials: TestimonialsService,
  ) {}

  public buildCommonResponseData(): Observable<any> {
    return forkJoin([
      this.commonData.fetchCommonData(),
      this.features.fetchFeatures(),
      this.navigation.fetchNavMenu(),
      this.pricingCards.fetchPricingCards(),
      this.testimonials.fetchTestimonials(),
    ]).pipe(
      takeLast(1),
      map((result) => {
        const data = {} as AppDataModel;
        data.headerContent = JSON.parse(result[0][0].headerContent);
        data.footerContent = JSON.parse(result[0][0].footerContent);
        data.contactsSection = JSON.parse(result[0][0].contactsSection);
        data.features = result[1];
        data.navigationMenu = {
          navMenuItems: result[2],
        };
        data.pricingSection = {
          pricingHeaderText: (() =>
            JSON.parse(result[0][0].pricingSection)?.pricingHeaderText)(),
          pricingDescriptionText: (() =>
            JSON.parse(result[0][0].pricingSection)?.pricingDescriptionText)(),
          pricingCards: result[3],
        };
        data.testimonialsSection = {
            testimonialsHeaderText: (() =>
            JSON.parse(result[0][0].testimonialsSection)?.testimonialsHeaderText)(),
            testimonialsDescriptionText: (() =>
            JSON.parse(result[0][0].testimonialsSection)?.testimonialsDescriptionText)(),
            testimonials: result[4]
        }
        return data;
      }),
    );
  }
}
