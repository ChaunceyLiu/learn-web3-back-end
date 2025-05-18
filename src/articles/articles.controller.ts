import { Controller, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleEntity } from '../entities/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(
    @Body() body: { title: string; content: string; metadata?: object },
  ): Promise<ArticleEntity> {
    return this.articlesService.create({
      title: body.title,
      content: body.content,
      metadata: body.metadata || {},
    });
  }
}
