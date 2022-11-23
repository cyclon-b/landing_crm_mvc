import { Test, TestingModule } from '@nestjs/testing';
import { NavigationMenuService } from './navigation-menu.service';

describe('NavigationMenuService', () => {
  let service: NavigationMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavigationMenuService],
    }).compile();

    service = module.get<NavigationMenuService>(NavigationMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
