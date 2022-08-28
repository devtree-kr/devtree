import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostTagMap } from 'src/post-tag-map/post-tag-map';
import { Tag } from 'src/tag/tag';
import { Post } from './post';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostTagMap, Tag])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
