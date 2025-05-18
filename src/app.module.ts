import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChainDataModule } from './chain-data/chain-data.module';
import { WalletDataModule } from './wallet-data/wallet-data.module';
import { CrawlerModule } from './crawler/crawler.module';
import { HttpService } from './http/http.service';
import { ParsersService } from './parsers/parsers.service';
import { AiService } from './ai/ai.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from './http/http.module';
import { ParsersModule } from './parsers/parsers.module';
import { AiModule } from './ai/ai.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesService } from './articles/articles.service';
import { ArticlesController } from './articles/articles.controller';
import { ArticleEntity } from './entities/article.entity';

@Module({
  imports: [
    ChainDataModule,
    WalletDataModule,
    CrawlerModule,
    ConfigModule.forRoot({
      // 新增这行
      isGlobal: true, // 全局可用
      envFilePath: '.env',
    }),
    HttpModule,
    ParsersModule,
    AiModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',      // 本地数据库地址
      port: 5432,             // 默认端口
      username: 'postgres', // 替换为你的数据库用户名
      password: 'admin', // 替换为你的数据库密码
      database: 'postgres',  // 替换为你的数据库名
      autoLoadEntities: true, // 自动加载实体
      synchronize: true,      // 【开发环境】自动同步表结构
      logging: ['query'],     // 打印 SQL 日志（调试用）
    }),
    TypeOrmModule.forFeature([ArticleEntity])
  ],
  controllers: [AppController, ArticlesController],
  providers: [AppService, HttpService, ParsersService, AiService, ArticlesService],
})
export class AppModule {}
