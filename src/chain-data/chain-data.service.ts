import { Injectable } from '@nestjs/common';
import { CreateChainDatumDto } from './dto/create-chain-datum.dto';
import { UpdateChainDatumDto } from './dto/update-chain-datum.dto';
import { secretKey, apiKey, passphrase } from '@/utils/request';
import { RestClient, OrderRequest } from 'okx-api';
import { fetchHttp, headersParams, getRequestUrl } from '@/utils/request';

@Injectable()
export class ChainDataService {
  create(createChainDatumDto: CreateChainDatumDto) {
    return 'This action adds a new chainDatum';
  }

  findAll() {
    return `This action returns all chainData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chainDatum`;
  }

  update(id: number, updateChainDatumDto: UpdateChainDatumDto) {
    return `This action updates a #${id} chainDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} chainDatum`;
  }

  async getSupportedChainData() {
    const client = new RestClient(
      {
        apiKey: apiKey,
        // apiKey: 'apiKeyHere',
        apiSecret: secretKey,
        // apiSecret: 'apiSecretHere',
        apiPass: passphrase,
        // apiPass: 'apiPassHere',
      },
      'demo',
      undefined,
      {
        headers: { 'OK-ACCESS-PROJECT': '1fe60d3da8894a002a2c6cd74de9b15c' },
      },
    );
    const res = await client.getPrivate(
      '/api/v5/wallet/chain/supported-chains',
    );
    return res;
  }
  // 获取综合币价

  async getCurrenciesPrice(params) {
    const client = new RestClient(
      {
        apiKey: apiKey,
        apiSecret: secretKey,
        apiPass: passphrase,
      },
      'demo',
      undefined,
      {
        headers: { 'OK-ACCESS-PROJECT': '1fe60d3da8894a002a2c6cd74de9b15c' },
      },
    );
    const res = await client.postPrivate(
      '/api/v5/wallet/token/current-price',
      JSON.parse(params.q),
    );
    return res;
  }

  // 获取历史价格
  async getHistoricalPrice(params): Promise<any> {
    const client = new RestClient({
      apiKey: apiKey,
      // apiKey: 'apiKeyHere',
      apiSecret: secretKey,
      // apiSecret: 'apiSecretHere',
      apiPass: passphrase,
      // apiPass: 'apiPassHere',
    });

    try {
      const res = await client.getPrivate(
        `/api/v5/wallet/token/historical-price?chainIndex=${params.chainIndex}&limit=20&period=${params.period}&tokenAddress=`,
      );
      return res;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to fetch historical price');
    }
  }

  // 获取实时币价

  async getRealTimePrice(params) {
    const client = new RestClient({
      apiKey: apiKey,
      // apiKey: 'apiKeyHere',
      apiSecret: secretKey,
      // apiSecret: 'apiSecretHere',
      apiPass: passphrase,
      // apiPass: 'apiPassHere',
    });
    try {
      const res = await client.postPrivate(
        `/api/v5/wallet/token/real-time-price`,
        params,
      );
      return res?.map((item) => ({
        ...item,
        time: new Date().getTime(),
        price: (Math.random() * 1000).toString(),
      }));
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to fetch real-time price');
    }
  }
}
