import { Column, Entity, PrimaryColumn } from 'typeorm';
import { PostTagMap as Type } from '@entities';

@Entity()
export class PostTagMap implements Type {
  @PrimaryColumn({ name: 'id' })
  postId: number;
  @PrimaryColumn({ name: 'tagID' })
  tagId: number;
}
