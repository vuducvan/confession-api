import { IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PermissionDto {
  @ApiProperty({
    type: Number,
  })
  @IsDefined()
  canCreate: number;

  @ApiProperty({
    type: Number,
  })
  @IsDefined()
  canRead: number;

  @ApiProperty({
    type: Number,
  })
  @IsDefined()
  canUpdate: number;

  @ApiProperty({
    type: Number,
  })
  @IsDefined()
  canDelete: number;

  @ApiProperty({
    type: Number,
  })
  @IsDefined()
  canApprove: number;

  @ApiProperty()
  @IsString()
  url: string;
}

export class UserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  email: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  dateOfBirth: string;

  @ApiProperty()
  @IsString()
  class: string;

  @ApiProperty()
  @IsString()
  facebookLink: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  username: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  password: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  role: string;

  @ApiProperty({
    type: PermissionDto,
  })
  @IsDefined()
  permission: PermissionDto;
  isDelete: number;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
}
