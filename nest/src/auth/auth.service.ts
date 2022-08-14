import { User } from '@entities';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
type PasswordOmitUser = Omit<User, 'password'>;
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  public async validateUser(email: string, password: string) {
    return await this.userService.findWithEmailAndPassword(email, password);
  }

  // jwt tokenを返す
  async login(user: PasswordOmitUser) {
    // jwtにつけるPayload情報
    const payload: User = {
      email: user.email,
      name: user.name,
      id: user.id,
      nickName: user.nickName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return {
      access_token: this.jwtService.sign(payload, {
        privateKey: process.env.JWT_SECRET_KEY,
      }),
    };
  }
}
