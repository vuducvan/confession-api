import { Document } from 'mongoose';
import { IConfession } from './interfaces/confessions.interface';

export interface IConfessionModel extends Document, IConfession {}
