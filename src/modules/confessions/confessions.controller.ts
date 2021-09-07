import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfessionsService } from './confessions.service';
import { ConfessionDto } from './dto/confession.dto';
import { IConfession } from './interfaces/confessions.interface';

@ApiTags('Confession')
@Controller('confessions')
export class ConfessionsController {
  constructor(private readonly confessionService: ConfessionsService) {}

  @Get()
  findAll(): Promise<IConfession[]> {
    return this.confessionService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<IConfession> {
    return this.confessionService.findById(id);
  }

  @Post()
  create(@Body() body: ConfessionDto): Promise<IConfession> {
    return this.confessionService.createOne(body);
  }

  @Patch('/update/:id')
  updateOne(@Param('id') id: string, @Body() body: ConfessionDto) {
    return this.confessionService.updateOne(id, body);
  }

  @Patch('/delete/:id')
  removeOne(@Param('id') id: string) {
    return this.confessionService.removeOne(id);
  }

  @Patch('/approve/:id')
  approveOne(@Param('id') id: string) {
    return this.confessionService.approveOne(id);
  }
}
