import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User as Type } from '@entities';

@Entity()
export class User implements Type {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  nickName: string;
  @Column()
  address: string;
  @Column()
  tel: string;
  @Column()
  sex: string;
  @Column()
  birthday: Date;
  @Column()
  name: string;
  @Column()
  corpId: string;
  @Column()
  userImgId: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
