import { Module } from '@nestjs/common';
import { ParsersService } from './parsers.service';

@Module({
  providers: [ParsersService],
  exports: [ParsersService], // 必须导出！
})
export class ParsersModule {}
