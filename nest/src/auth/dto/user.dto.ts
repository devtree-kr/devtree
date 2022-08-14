import { IsEmail, IsNotEmpty } from 'class-validator';

/**이용자 추가 DTO */
export class NewUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  nickName: string;
}

/**이용자 추가 DTO */
export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
