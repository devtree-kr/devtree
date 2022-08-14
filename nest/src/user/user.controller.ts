import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewUserDto } from './dto/new-user.input';
import { User } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**SQL에서 유저 전부 뽑아오기(함수명은 짓기 나름) */
  @Get('getAll') // getAll로 들어오는 GET리퀘스트를 이걸로 실행시키겠다는 의미
  async getAllFromRawSql() {
    return await this.userService.getAllWithRawSQL();
  }

  /**SQL에서 유저 전부 뽑아오기(함수명은 짓기 나름) */
  @Get('getAllEasy') // getAllEasy로 들어오는 GET리퀘스트를 이걸로 실행시키겠다는 의미
  async getAllWithTypORM() {
    return await this.userService.getAllWithTypORM();
  }

  @Post('join')
  async addNewUser(@Body() body: NewUserDto) {
    this.userService.addNewUser;
    return 'hell';
  }
}
