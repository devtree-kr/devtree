import { User } from '@entities';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { NewUserDto } from './dto/user.dto';
import { CurrentUser } from './guards/local-auth.guard';
type PasswordOmitUser = Omit<User, 'password'>;
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('join')
  async addNewUser(@Body() body: NewUserDto) {
    return await this.userService.addNewUser(body);
  }

  @UseGuards(AuthGuard('local')) // passport-local戦略を付与する
  @Post('login')
  async login(@Request() req: { user: PasswordOmitUser }) {
    const token = await this.authService.login(req.user);
    // JwtToken을 돌려줌
    return token;
  }

  @UseGuards(AuthGuard('jwt')) //
  @Get('check')
  async authCheck(@CurrentUser() user: User) {
    return user;
  }
}
