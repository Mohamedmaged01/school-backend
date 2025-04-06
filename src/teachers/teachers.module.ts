// src/teachers/teachers.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { SchoolsModule } from '../schools/schools.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [forwardRef(() => SchoolsModule), ConfigModule],
  controllers: [TeachersController],
  providers: [TeachersService],
  exports: [TeachersService],
})
export class TeachersModule {}
