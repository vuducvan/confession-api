import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ConfessionsService } from './confessions.service';
import { ConfessionDto } from './dto/confession.dto';
import { IConfession } from './interfaces/confessions.interface';
@ApiSecurity('token')
@ApiTags('Confession')
@Controller('confessions')
export class ConfessionsController {
  constructor(private readonly confessionService: ConfessionsService) {}

  @Get()
  findAll(@Req() req: Request): Promise<IConfession[]> {
    return this.confessionService.findAll(req);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<IConfession> {
    return this.confessionService.findById(id);
  }

  @Post()
  create(
    @Body() body: ConfessionDto,
    @Req() req: Request,
  ): Promise<IConfession> {
    return this.confessionService.createOne(body, req);
  }

  @Patch('/update/:id')
  updateOne(
    @Param('id') id: string,
    @Body() body: ConfessionDto,
    @Req() req: Request,
  ) {
    return this.confessionService.updateOne(id, body, req);
  }

  @Patch('/delete/:id')
  removeOne(@Param('id') id: string) {
    return this.confessionService.removeOne(id);
  }

  @Patch('/approve/:id')
  approveOne(@Param('id') id: string, @Req() req: Request) {
    return this.confessionService.approveOne(id, req);
  }

  @Patch('/approve/not/:id')
  notApproveOne(@Param('id') id: string, @Req() req: Request) {
    return this.confessionService.notApproveOne(id, req);
  }
}
