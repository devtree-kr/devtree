import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User as Type } from '@entities';

/**이용자엔티티 */
@Entity()
export class User implements Type {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column()
  birthday: Date;
  @Column()
  sex: string;
  @Column()
  nickName: string;
  @Column()
  address: string;
  @Column()
  zipcode?: string;
  @Column()
  tel: string;
  @Column()
  corpId: string;
  @Column()
  userImgId: string;
  @CreateDateColumn({ update: false })
  createdAt: Date;
  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
