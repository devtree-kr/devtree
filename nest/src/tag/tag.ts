import { Tag as Type } from '@entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Tag implements Type {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  tagNmKr: string;
  @Column()
  tagNmEn: string;
}
