import { Injectable } from '@nestjs/common';
import axios, { type AxiosInstance } from 'axios';

@Injectable()
export class HttpService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      headers: {
        'User-Agent': 'Mozilla/5.0 (...)',
      },
      timeout: 10000,
    });
  }

  async fetchPage(url: string): Promise<string> {
    const { data } = await this.axiosInstance.get(url);
    return data;
  }

  async postWithAuth(url: string, data: any, apiKey: string) {
    return this.axiosInstance.post(url, data, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
  }
}
