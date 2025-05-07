import { Module } from '@nestjs/common';
import { WalletDataService } from './wallet-data.service';
import { WalletDataController } from './wallet-data.controller';

@Module({
  controllers: [WalletDataController],
  providers: [WalletDataService],
})
export class WalletDataModule {}
