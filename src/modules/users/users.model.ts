import { Document } from 'mongoose';
import { IUser } from './interfaces/users.interface';

export interface IUserModel extends Document, IUser {}
