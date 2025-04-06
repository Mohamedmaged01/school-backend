import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HeaderCheckMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const expectedHeader = this.configService.get('CUSTOM_HEADER_VALUE');
    const receivedHeader = req.headers['custom-header'];

    if (!receivedHeader || receivedHeader !== expectedHeader) {
      throw new UnauthorizedException('Invalid custom header');
    }

    next();
  }
}
