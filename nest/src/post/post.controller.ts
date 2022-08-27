import { User } from '@entities';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/guards/local-auth.guard';
import { Post as PostType } from './post';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @UseGuards(AuthGuard('jwt')) //
  @Post('new')
  async addNewPost(@CurrentUser() user: User, @Body() body: PostType) {
    await this.postService.addNewPost(user, body);
  }
}
