import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserDto } from '../auth/dto/user.dto';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>, // 유저 리포지토리
  ) {}

  public async getAllWithRawSQL() {
    // 이 SQL로 실행해서 뽑아오고
    const res = await this.repo.query(`
    SELECT * FROM user
    `);
    return this.repo.create(res); // 이 리포지토리 클래스로 변환해서 리턴
  }

  public async getAllWithTypORM() {
    return await this.repo.find(); // OR맵퍼에게 가져오라고 시킴
  }

  public async addNewUser({ nickName, email, password }: NewUserDto) {
    const entity = this.repo.create({ nickName, email, password });
    return await this.repo.save(entity);
  }

  public async findWithEmailAndPassword(email: string, password: string) {
    return await this.repo.findOne({ where: { email, password } });
  }
}
