import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Post as Type } from '@entities';
/**게시물 엔티티 */
@Entity()
export class Post implements Type {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column()
  views: number;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
