import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Raw, Repository } from 'typeorm';
import { Tag } from './tag';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private repo: Repository<Tag>, // 유저 리포지토리
  ) {}
  public async searchTags(keyword: string) {
    return await this.repo.find({
      where: [
        {
          tagNmEn: Raw((alias) => `${alias} LIKE :keyword`, {
            keyword: `${keyword}%`,
          }),
        },
        {
          tagNmKr: Raw((alias) => `${alias} LIKE :keyword`, {
            keyword: `${keyword}%`,
          }),
        },
      ],
    });
  }
}
