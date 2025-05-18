import { 
    Entity, 
    PrimaryColumn, 
    Column, 
    UpdateDateColumn,
    PrimaryGeneratedColumn 
  } from 'typeorm';
  
  @Entity({ 
    name: 'articles', // 显式指定表名
    schema: 'public' // 指定schema
  })
  export class ArticleEntity {
    @PrimaryGeneratedColumn('increment', { 
      type: 'bigint',
      unsigned: true 
    })
    id: number;
  
    @PrimaryColumn({ 
      type: 'timestamp with time zone',
      name: 'created_at',
      default: () => 'CURRENT_TIMESTAMP',
      update: false // 禁止更新此字段
    })
    createdAt: Date;
  
    @Column({ 
      type: 'varchar', 
      length: 255,
      nullable: false 
    })
    title: string;
  
    @Column({ 
      type: 'text',
      nullable: false 
    })
    content: string;
  
    @UpdateDateColumn({
      type: 'timestamp with time zone',
      name: 'updated_at',
      nullable: true
    })
    updatedAt?: Date;
  
    @Column({
      type: 'jsonb',
      default: {}
    })
    metadata: object;
  }