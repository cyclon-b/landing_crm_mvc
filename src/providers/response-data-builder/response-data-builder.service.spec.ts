import { Test, TestingModule } from '@nestjs/testing';
import { ResponseDataBuilderService } from './response-data-builder.service';

describe('ResponseDataBuilderService', () => {
  let service: ResponseDataBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseDataBuilderService],
    }).compile();

    service = module.get<ResponseDataBuilderService>(ResponseDataBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
