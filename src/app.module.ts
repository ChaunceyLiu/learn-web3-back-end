import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChainDataModule } from './chain-data/chain-data.module';
import { WalletDataModule } from './wallet-data/wallet-data.module';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [ChainDataModule, WalletDataModule, CrawlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
