import { Test, TestingModule } from '@nestjs/testing';
import { PricingCardsService } from './pricing-cards.service';

describe('PricingCardsService', () => {
  let service: PricingCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricingCardsService],
    }).compile();

    service = module.get<PricingCardsService>(PricingCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
