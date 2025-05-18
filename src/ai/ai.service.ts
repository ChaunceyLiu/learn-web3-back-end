import { HttpService } from '@/http/http.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; 

@Injectable()
export class AiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async analyzeMarketData(prompt: string) {
    const response = await this.httpService.postWithAuth(
      this.configService.get('DEEPSEEK_API_URL') || '',
      {
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
      },
      this.configService.get('DEEPSEEK_API_KEY') || '',
    );

    return response.data.choices[0].message.content;
  }
}
