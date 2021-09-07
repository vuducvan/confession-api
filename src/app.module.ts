import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ConfessionsModule } from './modules/confessions/confessions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfessionsModule,
    MongooseModule.forRoot('mongodb://localhost/confession'),
  ],
})
export class AppModule {}
