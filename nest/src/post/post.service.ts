import { User } from '@entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostTagMap } from 'src/post-tag-map/post-tag-map';
import { Tag } from 'src/tag/tag';
import { Repository } from 'typeorm';
import { SinglePostView } from '../../../types/dtos/post';
import { NewPostInput } from './dto/new-post.input';
import { Post } from './post';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepo: Repository<Post>,
    @InjectRepository(PostTagMap) private postTagRepo: Repository<PostTagMap>,
    @InjectRepository(Tag) private tagRepo: Repository<Tag>,
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

  async getPostView(id: number): Promise<SinglePostView> {
    return await this.postRepo.manager.transaction(async () => {
      const postEntity = await this.postRepo.findOne({ where: { id: id } });
      const tagMaps = await this.postTagRepo.find({ where: { postId: id } });
      const tags = await Promise.all(
        tagMaps.map(({ tagId }) =>
          this.tagRepo.findOne({ where: { id: tagId } }),
        ),
      );
      return { ...postEntity, tags };
    });
  }
}
