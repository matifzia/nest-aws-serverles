
import { Injectable, Inject } from '@nestjs/common';
// import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignupDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async register(signupDto: SignupDto): Promise<User> {
    return await this.userRepository.save(
      this.userRepository.create(signupDto)
    );
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }

}
