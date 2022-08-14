import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  public async validateUser(email: string, password: string) {
    return await this.userService.findWithEmailAndPassword(email, password);
  }
}
