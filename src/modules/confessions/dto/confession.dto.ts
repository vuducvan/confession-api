import { IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConfessionDto {
  userId: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  typeOf: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  content: string;

  @ApiProperty()
  @IsString()
  imageLink: string;

  @ApiProperty()
  @IsString()
  message: string;

  status: string;
  isDelete: number;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
}
