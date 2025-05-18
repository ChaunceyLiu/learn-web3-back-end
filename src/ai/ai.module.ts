import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { HttpModule } from '@/http/http.module'; // 引入 HttpModule 使其可用
@Module({
  imports: [HttpModule], // 引入 HttpModule 使其可用
  providers: [AiService],
  exports: [AiService], // 必须导出！
})
export class AiModule {}
