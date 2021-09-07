import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepository } from '../../base/base.repository';
import { IConfessionModel } from './confessions.model';
import { ConfessionModelName } from './schemas/confessions.schema';

@Injectable()
export class ConfessionRepository extends BaseRepository<IConfessionModel> {
  constructor(@InjectModel(ConfessionModelName) model) {
    super(model);
  }
}
