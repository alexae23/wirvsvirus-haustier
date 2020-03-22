import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LoginGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const result = (await super.canActivate(context) as boolean); 
    await super.logIn(request);
    return result;
}

handleRequest(err, user, info) {

    if (err || !user) {
        throw err || new UnauthorizedException();
    }

    return user;
}
}
