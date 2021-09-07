import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/users.interface';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { ROLE_NAME, URL_CONFESSION } from '../../const/users.const';
@Injectable()
export class UsersService {
  constructor(private readonly repo: UserRepository) {}

  async findAll(): Promise<IUser[]> {
    return await this.repo.findAll();
  }

  async findById(id: string): Promise<IUser> {
    return await this.repo.findById(id);
  }

  async createOne(body: IUser): Promise<IUser> {
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    body.isDelete = 0;
    return await this.repo.create(body);
  }

  async signUp(body: IUser): Promise<IUser> {
    await this._rebuildSignUp(body);
    return await this.repo.create(body);
  }

  async updateOne(id: string, body: IUser): Promise<IUser> {
    return await this.repo.updateOne(id, body);
  }

  async removeOne(id: string): Promise<any> {
    return await this.repo.removeOne(id);
  }

  async findOne(username: string): Promise<IUser> {
    const params = { username: username, isDelete: 0 };
    return await this.repo.findOne(params);
  }

  async find(id: string): Promise<IUser[]> {
    const params = { _id: id, isDelete: 0 };
    return await this.repo.find(params);
  }

  async _rebuildSignUp(body: IUser) {
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    body.isDelete = 0;
    body.role = ROLE_NAME.USER;
    body.permission = {
      canCreate: 1,
      canRead: 1,
      canDelete: 0,
      canUpdate: 0,
      canApprove: 0,
      url: URL_CONFESSION,
    };
    return body;
  }
}
