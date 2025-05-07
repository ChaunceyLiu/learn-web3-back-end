import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ChainDataService } from './chain-data.service';
import { CreateChainDatumDto } from './dto/create-chain-datum.dto';
import { UpdateChainDatumDto } from './dto/update-chain-datum.dto';

@Controller('chain-data')
export class ChainDataController {
  constructor(private readonly chainDataService: ChainDataService) {}

  @Post()
  create(@Body() createChainDatumDto: CreateChainDatumDto) {
    return this.chainDataService.create(createChainDatumDto);
  }

  @Get('/getHistoricalPrice')
  async getHistoricalPrice(
    @Query() params: { chainIndex: string; period: string },
  ): Promise<any> {
    return await this.chainDataService.getHistoricalPrice(params);
  }

  @Get('/getSupportedChainData')
  async getSupportedChainData(): Promise<any> {
    return await this.chainDataService.getSupportedChainData();
  }
  @Get('/getCurrenciesPrice')
  async getCurrenciesPrice(@Query() params): Promise<any> {
    return await this.chainDataService.getCurrenciesPrice(params);
  }

  @Post('/getRealTimePrice')
  async getRealTimePrice(@Body() queryParams: any) {
    return await this.chainDataService.getRealTimePrice(queryParams);
  }
}
