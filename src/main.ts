import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  // 使用预定义格式（如 'combined' 包含更多信息）
  app.use(morgan('dev'));

  // 自定义格式（打印 Body）
  app.use(
    morgan((tokens, req, res) => {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        'Headers:',
        JSON.stringify(req.headers),
        'Body:',
        JSON.stringify(req.body),
        tokens.status(req, res),
        '-',
        tokens['response-time'](req, res),
        'ms',
      ].join(' ');
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
