import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostTagMap } from './post-tag-map';

@Module({
  imports: [TypeOrmModule.forFeature([PostTagMap])],
})
export class PostTagMapModule {}
