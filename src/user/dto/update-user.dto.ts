import { IsDefined, IsString, IsEmail } from 'class-validator';

export class UpdateUserDto {
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
}
