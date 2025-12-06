import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(createUserDto: any) {
    return createUserDto;
  }
}
