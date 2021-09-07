import { IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  username: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  password: string;
}
