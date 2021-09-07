import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfessionsController } from './confessions.controller';
import { ConfessionRepository } from './confessions.repository';
import { ConfessionsService } from './confessions.service';
import {
  ConfessionModelName,
  ConfessionSchema,
} from './schemas/confessions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ConfessionModelName,
        schema: ConfessionSchema,
      },
    ]),
  ],
  controllers: [ConfessionsController],
  providers: [ConfessionsService, ConfessionRepository],
})
export class ConfessionsModule {}
