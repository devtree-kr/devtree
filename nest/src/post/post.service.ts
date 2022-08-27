import { User } from '@entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private repo: Repository<Post>) {}
  async addNewPost(user: User, body: Post) {
    body.userId = user.id;
    body.views = 0;
    return await this.repo.save(body);
  }
}
