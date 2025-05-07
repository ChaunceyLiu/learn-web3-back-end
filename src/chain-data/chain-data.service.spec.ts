import { Test, TestingModule } from '@nestjs/testing';
import { ChainDataService } from './chain-data.service';

describe('ChainDataService', () => {
  let service: ChainDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChainDataService],
    }).compile();

    service = module.get<ChainDataService>(ChainDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
