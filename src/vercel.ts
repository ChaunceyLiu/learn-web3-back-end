// src/vercel.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// 创建 Express 实例
const expressServer = express();

expressServer.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
  });

// 初始化 NestJS 应用（单例模式）
const createNestServer = async (expressInstance: express.Express) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    { 
      logger: ['error', 'warn'], // 仅保留必要日志
      bodyParser: true
    }
  );

  // 执行初始化但不启动 HTTP 服务
  await app.init();
  return expressInstance;
};

// 初始化 Express 应用（缓存实例）
const initializedApp = createNestServer(expressServer);

// 导出 Vercel 无服务器函数处理程序
export default async (req: VercelRequest, res: VercelResponse) => {
  await initializedApp;
  expressServer(req as express.Request, res as unknown as express.Response, (err) => {
    if (err) {
      console.error('Request handling error:', err);
      res.status(500).send('Internal Server Error');
    }
  });
};