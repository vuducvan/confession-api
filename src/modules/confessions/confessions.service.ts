import { Injectable, NotFoundException } from '@nestjs/common';
import { IConfession } from './interfaces/confessions.interface';
import { ConfessionRepository } from './confessions.repository';
import { CONFESSION_STATUS } from '../../const/confessionStatus.const';
import { Request } from 'express';
import { ROLE_NAME } from '../../const/users.const';

@Injectable()
export class ConfessionsService {
  constructor(private readonly repo: ConfessionRepository) {}

  async findAll(req: Request): Promise<IConfession[]> {
    const role = 'role';
    let checkUser = false;
    for (const x in req[role]) {
      if (!checkUser && req[role][x] === ROLE_NAME.USER) {
        checkUser = true;
      }
    }
    if (checkUser) {
      const param = { status: CONFESSION_STATUS.APPROVED, isDelete: 0 };
      return this.repo.find(param);
    }
    return this.repo.findAll();
  }

  async findById(id: string): Promise<IConfession> {
    return this.repo.findById(id);
  }

  async createOne(body: IConfession, req: Request): Promise<IConfession> {
    await this._rebuildCreateConfession(body, req);
    return this.repo.create(body);
  }

  async updateOne(
    id: string,
    body: IConfession,
    req: Request,
  ): Promise<IConfession> {
    const userId = 'userId';
    body.updatedAt = new Date();
    body.updatedBy = req[userId];
    return this.repo.updateOne(id, body);
  }

  async removeOne(id: string): Promise<any> {
    return this.repo.removeOne(id);
  }

  async approveOne(id: string, req: Request): Promise<IConfession> {
    const userId = 'userId';
    const confession = await this.findById(id);
    if (!confession) {
      throw new NotFoundException('Not Found');
    }
    const param = {
      status: CONFESSION_STATUS.APPROVED,
      updatedBy: req[userId],
      updatedAt: new Date(),
    };
    return await this.repo.updateOne(id, param);
  }

  async notApproveOne(id: string, req: Request): Promise<IConfession> {
    const userId = 'userId';
    const confession = await this.findById(id);
    if (!confession) {
      throw new NotFoundException('Not Found');
    }
    const param = {
      status: CONFESSION_STATUS.NOT_APPROVE,
      updatedBy: req[userId],
      updatedAt: new Date(),
    };
    return await this.repo.updateOne(id, param);
  }

  _rebuildCreateConfession(body: IConfession, req: Request) {
    const userIdReq = 'userId';
    body.createdAt = new Date();
    body.createdBy = req[userIdReq];
    body.userId = req[userIdReq];
    body.status = CONFESSION_STATUS.PENDING_APPROVE;
    body.isDelete = 0;
    return body;
  }
}
