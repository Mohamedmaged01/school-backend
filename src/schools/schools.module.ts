// src/schools/schools.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';
import { TeachersModule } from '../teachers/teachers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [forwardRef(() => TeachersModule), ConfigModule],
  controllers: [SchoolsController],
  providers: [SchoolsService],
  exports: [SchoolsService],
})
export class SchoolsModule {}
