import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfessionsController } from './confessions.controller';
import { ConfessionRepository } from './confessions.repository';
import { ConfessionsService } from './confessions.service';
import {
  ConfessionModelName,
  ConfessionSchema,
} from './schemas/confessions.schema';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConst } from '../../const/jwt.const';
import {
  CheckCanCreate,
  CheckCanDelete,
  CheckCanRead,
  CheckCanUpdate,
  CheckCanApprove,
} from '../../middlewares/checkRole.middleware';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      {
        name: ConfessionModelName,
        schema: ConfessionSchema,
      },
    ]),
    JwtModule.register({
      secret: jwtConst.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [ConfessionsController],
  providers: [ConfessionsService, ConfessionRepository],
})
export class ConfessionsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckCanCreate)
      .forRoutes({ path: 'confessions', method: RequestMethod.POST });
    consumer
      .apply(CheckCanRead)
      .forRoutes({ path: 'confessions*', method: RequestMethod.GET });
    consumer
      .apply(CheckCanUpdate)
      .forRoutes({ path: 'confessions/update*', method: RequestMethod.PATCH });
    consumer
      .apply(CheckCanDelete)
      .forRoutes({ path: 'confessions/delete', method: RequestMethod.PATCH });
    consumer
      .apply(CheckCanApprove)
      .forRoutes({ path: 'confessions/approve*', method: RequestMethod.PATCH });
  }
}
