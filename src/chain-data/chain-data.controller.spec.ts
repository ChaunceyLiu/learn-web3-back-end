import { Test, TestingModule } from '@nestjs/testing';
import { ChainDataController } from './chain-data.controller';
import { ChainDataService } from './chain-data.service';

describe('ChainDataController', () => {
  let controller: ChainDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChainDataController],
      providers: [ChainDataService],
    }).compile();

    controller = module.get<ChainDataController>(ChainDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
