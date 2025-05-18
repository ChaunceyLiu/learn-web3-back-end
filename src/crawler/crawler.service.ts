import { Injectable } from '@nestjs/common';
import { CreateCrawlerDto } from './dto/create-crawler.dto';
import { UpdateCrawlerDto } from './dto/update-crawler.dto';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { HttpService } from '@/http/http.service';
import { ParsersService } from '@/parsers/parsers.service';
import { AiService } from '@/ai/ai.service';

@Injectable()
export class CrawlerService {
  constructor(
    private readonly httpService: HttpService,
    private readonly parsersService: ParsersService,
    private readonly aiService: AiService,
  ) {}

  findAll() {
    return `This action returns all crawler`;
  }

  async getInformation(url) {
    try {
      const { data } = await axios.get(url, {
        headers: {
          // 模拟浏览器请求，避免被反爬
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
      });

      // 2. 使用 Cheerio 加载 HTML
      const $ = cheerio.load(data);
      const information = $('div.txtinfos').text().trim();
      return information;
    } catch (error) {
      console.error('Error getInformation data:', error.message);
    }
  }

  async getDeepSeek(params) {
    const prompt = `我正在模拟期货中进行玉米的交易练习，以下是我从东财网站是抓取到的玉米相关信息，请你帮我分析一下这些信息，给出一些建议和看法。
    ${params.paragraphs.join('\n')}
    ${params.comments.join('\n')}
    预估一下当前玉米价格的走势，并给出一些建议和看法。评估接下来你给的下单建议，因为是模拟练习 所以你可以给出真实建议，不用考虑我的资金。`;
    const axios = require('axios');

    const DEEPSEEK_API_KEY = 'sk-c16216e8e1dc4c3bbebf20d65208aa59';
    const API_URL = 'https://api.deepseek.com/v1/chat/completions';

    async function callDeepSeekAPI() {
      try {
        const response = await axios.post(
          API_URL,
          {
            model: 'deepseek-chat', // 根据实际模型调整
            messages: [{ role: 'user', content: prompt }],
          },
          {
            headers: {
              Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
              'Content-Type': 'application/json',
            },
          },
        );
        return response.data.choices[0].message.content;
      } catch (error) {
        console.error('请求失败:', error.response?.data || error.message);
      }
    }

    return await callDeepSeekAPI();
  }

  // async scrapeData() {
  //   const url = 'https://futures.eastmoney.com/qihuo/C.html';
  //   try {
  //     // 1. 发送 HTTP 请求获取网页内容
  //     const { data } = await axios.get(url, {
  //       headers: {
  //         // 模拟浏览器请求，避免被反爬
  //         'User-Agent':
  //           'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  //       },
  //     });

  //     // 2. 使用 Cheerio 加载 HTML
  //     const $ = cheerio.load(data);

  //     const paragraphs: string[] = [];
  //     const promises = $('div#futureImportentNews1 li > a')
  //       .map(async (i, element) => {
  //         const info = await this.getInformation($(element).prop('href'));
  //         return `${$(element).text().trim()} - ${info}`; // 合并当前文本和详情
  //       })
  //       .get();

  //     try {
  //       const results = await Promise.all(promises);
  //       paragraphs.push(...results);
  //     } catch (error) {
  //       console.error('Partial failure:', error.message);
  //     }

  //     // 示例：提取特定 class 的内容
  //     const comments: string[] = [];
  //     const commentsPromises = $('div#futureImportentNews li > a')
  //       .map(async (i, element) => {
  //         const info = await this.getInformation($(element).prop('href'));
  //         return `${$(element).text().trim()} - ${info}`; // 合并当前文本和详情
  //       })
  //       .get();

  //     try {
  //       const results = await Promise.all(commentsPromises);
  //       comments.push(...results);
  //     } catch (error) {
  //       console.error('Comments failure:', error.message);
  //     }
  //     // 示例：提取 meta 信息
  //     const description = $('meta[name="description"]').attr('content');

  //     // 输出结果
  //     console.log('Paragraphs:', paragraphs);
  //     // console.log('Titles:', comments);
  //     console.log('Description:', description);
  //     // const res = await this.getDeepSeek({
  //     //   paragraphs: paragraphs,
  //     //   comments: comments,
  //     //   description: description,
  //     // });
  //     // console.log('res:', res);
  //   } catch (error) {
  //     console.error('Error fetching data:', error.message);
  //   }
  // }
  async scrapeData() {
    const html = await this.httpService.fetchPage(
      'https://futures.eastmoney.com/qihuo/C.html',
    );
    const { description } = this.parsersService.parseMainPage(html);

    const $ = cheerio.load(html);

    // 并行处理逻辑
    const [paragraphs, comments] = await Promise.all([
      this.processItems($, '#futureImportentNews1 li > a'),
      this.processItems($, '#futureImportentNews li > a'),
    ]);

    return { paragraphs, comments, description };
  }

  private async processItems($: any, selector: string) {
    return Promise.all(
      $(selector)
        .map(async (i, el) => {
          const detailHtml = await this.httpService.fetchPage(
            $(el).attr('href'),
          );
          const info = this.parsersService.parseDetailPage(detailHtml);

          return `${$(el).text().trim()} - ${info}`;
        })
        .get(),
    );
  }

  async generateAnalysis(data: { paragraphs: string[]; comments: string[] }) {
    const prompt = this.buildPrompt(data);
    return this.aiService.analyzeMarketData(prompt);
  }

  private buildPrompt(data: { paragraphs: string[]; comments: string[] }) {
    return `我正在模拟期货中进行玉米的交易练习，以下是我从东财网站是抓取到的玉米相关信息，请你帮我分析一下这些信息，给出一些建议和看法。：
    ${data.paragraphs.join('\n')}
    ${data.comments.join('\n')}
   预估一下当前玉米价格的走势，并给出一些建议和看法。评估接下来你给的下单建议，因为是模拟练习 所以你可以给出真实建议，不用考虑我的资金。`;
  }
}
