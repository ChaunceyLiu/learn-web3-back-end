import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';

@Injectable()
export class ParsersService {
  parseMainPage(html: string) {
    const $ = cheerio.load(html);

    return {
      description: $('meta[name="description"]').attr('content'),
      // 其他通用解析逻辑...
    };
  }

  parseDetailPage(html: string) {
    const $ = cheerio.load(html);
    return $('div.txtinfos').text().trim();
  }
}
