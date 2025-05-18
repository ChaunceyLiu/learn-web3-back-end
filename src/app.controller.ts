import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/healthcheck')
  async checkDB() {
    try {
      await this.dataSource.query('SELECT 1');
      return { status: 'ok', time: new Date().toISOString() };
    } catch (e) {
      return { status: 'error', message: e.message };
    }
  }
}
