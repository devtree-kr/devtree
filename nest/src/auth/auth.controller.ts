import { User } from '@entities';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { NewUserDto } from './dto/user.dto';
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
    const user = req.user;
    const token = await this.authService.login(req.user);
    // LocalStrategy.validate()で認証して返した値がreq.userに入ってる
    // JwtToken を返す
    return { ...user, ...token };
  }
}
