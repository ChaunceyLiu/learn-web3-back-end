import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from '../entities/article.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepo: Repository<ArticleEntity>
      ) {}
    
      async create(article: Partial<ArticleEntity>): Promise<ArticleEntity> {
        return this.articleRepo.save(
          this.articleRepo.create({
            ...article,
          })
        );
      }
}

