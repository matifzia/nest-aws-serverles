import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  firstName: String;

  @Expose()
  lastName: String;

  @Expose()
  email: String;
}
