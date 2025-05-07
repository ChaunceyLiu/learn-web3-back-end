import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WalletDataService } from './wallet-data.service';
import { CreateWalletDatumDto } from './dto/create-wallet-datum.dto';
import { UpdateWalletDatumDto } from './dto/update-wallet-datum.dto';

@Controller('wallet-data')
export class WalletDataController {
  constructor(private readonly walletDataService: WalletDataService) {}

  @Post()
  create(@Body() createWalletDatumDto: CreateWalletDatumDto) {
    return this.walletDataService.create(createWalletDatumDto);
  }

  @Get()
  findAll() {
    return this.walletDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletDataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWalletDatumDto: UpdateWalletDatumDto,
  ) {
    return this.walletDataService.update(+id, updateWalletDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletDataService.remove(+id);
  }
  @Post('/rpcSepolia')
  async getRpcSepolia(@Body() params): Promise<any> {
    console.log(params);
    return await this.walletDataService.getRpcSepolia(params);
  }
}
