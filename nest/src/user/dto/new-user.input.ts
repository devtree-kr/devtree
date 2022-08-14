import { IsEmail, IsNotEmpty } from 'class-validator';

/**이용자 추가 DTO */
export class NewUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  nickName: string;
}
