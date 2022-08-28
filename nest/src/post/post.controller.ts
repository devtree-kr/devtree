import { User } from '@entities';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/guards/local-auth.guard';
import { NewPostInput } from './dto/new-post.input';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @UseGuards(AuthGuard('jwt')) //
  @Post('new')
  async addNewPost(@CurrentUser() user: User, @Body() body: NewPostInput) {
    console.log(body);
    await this.postService.addNewPost(user, body);
  }
}
