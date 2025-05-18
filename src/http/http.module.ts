import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpService } from './http.service';

@Module({
  imports: [ConfigModule], // 关键！使 ConfigService 可用
  providers: [HttpService],
  exports: [HttpService], // 必须导出才能被其他模块使用
})
export class HttpModule {}
