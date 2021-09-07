import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/users.dto';
import { IUser } from './interfaces/users.interface';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Promise<IUser> {
    return this.userService.findById(id);
  }

  @Post()
  create(@Body() body: UserDto): Promise<IUser> {
    return this.userService.createOne(body);
  }

  @Patch('/update/:id')
  updateOne(@Param('id') id: string, @Body() body: UserDto) {
    return this.userService.updateOne(id, body);
  }

  @Patch('/delete/:id')
  removeOne(@Param('id') id: string) {
    return this.userService.removeOne(id);
  }
}
