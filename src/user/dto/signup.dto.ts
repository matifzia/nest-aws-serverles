import { IsDefined, IsString, IsEmail } from 'class-validator';

export class SignupDto {
  @IsDefined()
  @IsString()
  firstName: String;

  @IsDefined()
  @IsString()
  lastName: String;

  @IsDefined()
  @IsString()
  @IsEmail()
  email: String;

  @IsDefined()
  @IsString()
  password: String;
}
