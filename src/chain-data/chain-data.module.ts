import { Module } from '@nestjs/common';
import { ChainDataService } from './chain-data.service';
import { ChainDataController } from './chain-data.controller';

@Module({
  controllers: [ChainDataController],
  providers: [ChainDataService],
})
export class ChainDataModule {}
