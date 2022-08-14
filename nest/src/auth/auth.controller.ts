import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginUserDto, NewUserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('join')
  async addNewUser(@Body() body: NewUserDto) {
    return await this.userService.addNewUser(body);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    return '';
  }
}
