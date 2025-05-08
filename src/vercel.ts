// src/vercel.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VercelRequest, VercelResponse } from '@vercel/node';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

// 创建 Express 实例
const server = express();

const bootstrap = async (): Promise<express.Express> => {
  // 使用 ExpressAdapter 将 Nest.js 挂载到 Express
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  // 确保监听 0.0.0.0 和 Vercel 的 PORT
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  return server;
};

// 导出 Express 实例（直接处理请求）
export default bootstrap().then((app) => app);