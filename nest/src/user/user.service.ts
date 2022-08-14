import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserDto } from './dto/new-user.input';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>, // 유저 리포지토리
  ) {}

  public async getAllWithRawSQL() {
    const res = await this.repo.query('SELECT * FROM user'); // 이 SQL로 실행해서 뽑아오고
    return this.repo.create(res); // 이 리포지토리 클래스로 변환해서 리턴
  }

  public async getAllWithTypORM() {
    return await this.repo.find(); // OR맵퍼에게 가져오라고 시킴
  }

  public async addNewUser({ nickName, email, password }: NewUserDto) {
    const entity = this.repo.create({ nickName, email, password });
    return await this.repo.save(entity);
  }
}
