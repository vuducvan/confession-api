import { IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
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

  role: string;
  permission: PermissionDto;
  isDelete: number;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
}

export class PermissionDto {
  canCreate: number;
  canRead: number;
  canUpdate: number;
  canDelete: number;
  canApprove: number;
  url: string;
}
