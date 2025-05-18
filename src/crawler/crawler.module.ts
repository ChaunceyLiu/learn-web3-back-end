import { Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';
import { CrawlerController } from './crawler.controller';
import { HttpModule } from '@/http/http.module';
import { ParsersModule } from '@/parsers/parsers.module';
import { AiModule } from '@/ai/ai.module';

@Module({
  imports: [
    HttpModule, // 关键！引入HTTP模块
    ParsersModule,
    AiModule,
  ],
  controllers: [CrawlerController],
  providers: [CrawlerService],
})
export class CrawlerModule {}
