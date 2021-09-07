import { Injectable, NotFoundException } from '@nestjs/common';
import { IConfession } from './interfaces/confessions.interface';
import { ConfessionRepository } from './confessions.repository';
import { confessionStatus } from '../../const/confessionStatus.const';

@Injectable()
export class ConfessionsService {
  constructor(private readonly repo: ConfessionRepository) {}

  async findAll(): Promise<IConfession[]> {
    return this.repo.findAll();
  }

  async findById(id: string): Promise<IConfession> {
    return this.repo.findById(id);
  }

  async createOne(body: IConfession): Promise<IConfession> {
    body.status = confessionStatus.PENDING_APPROVE;
    body.isDelete = 0;
    return this.repo.create(body);
  }

  async updateOne(id: string, body: IConfession): Promise<IConfession> {
    return this.repo.updateOne(id, body);
  }

  async removeOne(id: string): Promise<any> {
    return this.repo.removeOne(id);
  }

  async approveOne(id: string): Promise<IConfession> {
    const confession = await this.findById(id);
    if (!confession) {
      throw new NotFoundException('Not Found');
    }
    const param = { status: confessionStatus.APPROVED };
    return await this.repo.updateOne(id, param);
  }
}
