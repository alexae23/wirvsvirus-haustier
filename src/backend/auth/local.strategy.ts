import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private userService: UserService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    console.log(user);

    if (user && user.hashedPassword == password) {
      const {hashedPassword, ...cleanUser} = user;
      return cleanUser;
    }

    return null;
  }
}