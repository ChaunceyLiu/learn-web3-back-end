import { Test, TestingModule } from '@nestjs/testing';
import { WalletDataController } from './wallet-data.controller';
import { WalletDataService } from './wallet-data.service';

describe('WalletDataController', () => {
  let controller: WalletDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletDataController],
      providers: [WalletDataService],
    }).compile();

    controller = module.get<WalletDataController>(WalletDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
