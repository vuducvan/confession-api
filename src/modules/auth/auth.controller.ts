import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signins')
  signIn(@Body() body: SignInDto) {
    return this.authService.signIn(body.username, body.password);
  }

  @Post('/signups')
  signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }
}
