import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import {
  NestMiddleware,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { IToken } from './interfaces/token.interface';

@Injectable()
export class CheckCanCreate implements NestMiddleware {
  private userId = 'userId';
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.header('token');
    const payload: IToken = this.jwtService.verify(token);
    let check = false;
    const roleCheck = await this.usersService.find(payload.userId);
    for (const x in roleCheck) {
      if (
        !check &&
        roleCheck[x].permission.canCreate &&
        req.originalUrl.startsWith(roleCheck[x].permission.url)
      ) {
        check = true;
      }
    }

    if (!check) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'Permission deny',
        },
        403,
      );
    } else {
      req[this.userId] = payload.userId;
      next();
    }
  }
}

@Injectable()
export class CheckCanRead implements NestMiddleware {
  private userId = 'userId';
  private roleName = 'role';
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.header('token');
    const payload: IToken = this.jwtService.verify(token);
    let check = false;
    const roleArray: string[] = [];
    const roleCheck = await this.usersService.find(payload.userId);
    for (const x in roleCheck) {
      roleArray.push(roleCheck[x].role);
      if (
        !check &&
        roleCheck[x].permission.canRead &&
        req.originalUrl.startsWith(roleCheck[x].permission.url)
      ) {
        check = true;
      }
    }

    if (!check) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'Permission deny',
        },
        403,
      );
    } else {
      req[this.userId] = payload.userId;
      req[this.roleName] = roleArray;
      next();
    }
  }
}

@Injectable()
export class CheckCanUpdate implements NestMiddleware {
  private userId = 'userId';
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.header('token');
    const payload: IToken = this.jwtService.verify(token);
    let check = false;
    const roleCheck = await this.usersService.find(payload.userId);
    for (const x in roleCheck) {
      if (
        !check &&
        roleCheck[x].permission.canUpdate &&
        req.originalUrl.startsWith(roleCheck[x].permission.url)
      ) {
        check = true;
      }
    }

    if (!check) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'Permission deny',
        },
        403,
      );
    } else {
      req[this.userId] = payload.userId;
      next();
    }
  }
}

@Injectable()
export class CheckCanDelete implements NestMiddleware {
  private userId = 'userId';
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.header('token');
    const payload: IToken = this.jwtService.verify(token);
    let check = false;
    const roleCheck = await this.usersService.find(payload.userId);
    for (const x in roleCheck) {
      if (
        !check &&
        roleCheck[x].permission.canDelete &&
        req.originalUrl.startsWith(roleCheck[x].permission.url)
      ) {
        check = true;
      }
    }

    if (!check) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'Permission deny',
        },
        403,
      );
    } else {
      req[this.userId] = payload.userId;
      next();
    }
  }
}

@Injectable()
export class CheckCanApprove implements NestMiddleware {
  private userId = 'userId';
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.header('token');
    const payload: IToken = this.jwtService.verify(token);
    let check = false;
    const roleCheck = await this.usersService.find(payload.userId);
    for (const x in roleCheck) {
      if (
        !check &&
        roleCheck[x].permission.canApprove &&
        req.originalUrl.startsWith(roleCheck[x].permission.url)
      ) {
        check = true;
      }
    }

    if (!check) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'Permission deny',
        },
        403,
      );
    } else {
      req[this.userId] = payload.userId;
      next();
    }
  }
}
