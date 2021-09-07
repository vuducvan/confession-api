import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signins')
  signIn(@Body() body: SignInDto) {
    return this.authService.signIn(body.username, body.password);
  }
}
