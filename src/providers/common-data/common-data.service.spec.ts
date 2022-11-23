import { Test, TestingModule } from '@nestjs/testing';
import { CommonDataService } from './common-data.service';

describe('CommonDataService', () => {
  let service: CommonDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonDataService],
    }).compile();

    service = module.get<CommonDataService>(CommonDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be called and resolves', () => {
    const spy = jest.spyOn(service, 'fetchCommonData')
    expect(spy).toBeCalled;
    expect(spy).resolves;
  })
});
