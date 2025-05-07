import { Injectable } from '@nestjs/common';
import { CreateWalletDatumDto } from './dto/create-wallet-datum.dto';
import { UpdateWalletDatumDto } from './dto/update-wallet-datum.dto';

@Injectable()
export class WalletDataService {
  create(createWalletDatumDto: CreateWalletDatumDto) {
    return 'This action adds a new walletDatum';
  }

  findAll() {
    return `This action returns all walletData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} walletDatum`;
  }

  update(id: number, updateWalletDatumDto: UpdateWalletDatumDto) {
    return `This action updates a #${id} walletDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} walletDatum`;
  }

  async getRpcSepolia(params) {
    try {
      const res = await fetch('https://rpc.sepolia.ethpandaops.io', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });

  
      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(
          `RPC请求失败: ${res.status} ${res.statusText}\n${errorData}`,
        );
      }


      const data = await res.json();
      return data;
    } catch (error) {
      throw error; // 向上传递错误供调用方处理
    }
  }
}
