import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  protected primaryKey = '_id';
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const userLogin = await this.usersService.findOne(username);
    if (userLogin) {
      if (await bcrypt.compare(password, userLogin.password)) {
        const userId = userLogin[this.primaryKey];
        return {
          status: 'success',
          username: userLogin.username,
          accessToken: this.jwtService.sign({ userId: userId }),
        };
      }
    }
    return {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'username or password is incorrect',
    };
  }

  // async signUp()
}
