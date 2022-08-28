import { User } from '@entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostTagMap } from 'src/post-tag-map/post-tag-map';
import { Repository } from 'typeorm';
import { NewPostInput } from './dto/new-post.input';
import { Post } from './post';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepo: Repository<Post>,
    @InjectRepository(PostTagMap) private postTagRepo: Repository<PostTagMap>,
  ) {}
  async addNewPost(user: User, body: NewPostInput) {
    return await this.postRepo.manager.transaction(async () => {
      const postEntity = await this.postRepo.save({
        ...body,
        ...{ userId: user.id, views: 0 },
      });
      const tagMaps = body.tagIds.map((id) =>
        this.postTagRepo.create({ tagId: id, postId: postEntity.id }),
      );
      await this.postTagRepo.save(tagMaps);
      return postEntity;
    });
  }
}
