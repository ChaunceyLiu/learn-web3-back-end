import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  app.use(morgan('dev'));
  // ...其他中间件

  // 仅在非 Vercel 环境启动服务器
  if (!process.env.VERCEL) {
    await app.listen(process.env.PORT ?? 3000);
    console.log(`Server running on port ${process.env.PORT ?? 3000}`);
  }
}
// 确保只在本地开发时执行
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  bootstrap();
}
