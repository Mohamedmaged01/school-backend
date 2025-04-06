import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Roles } from '../common/decorators//roles/roles.decorator';
import { RolesGuard } from '../common/guards/roles/roles.guard';
@Controller('schools')
@UseGuards(RolesGuard)
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  @Roles('admin')
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }

  @Get()
  @Roles('admin', 'teacher', 'guest')
  findAll() {
    return this.schoolsService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'teacher', 'guest')
  findOne(@Param('id') id: string) {
    return this.schoolsService.findOne(+id);
  }

  @Put(':id')
  @Roles('admin')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolsService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.schoolsService.remove(+id);
  }

  @Get('analytics/teachers')
  @Roles('admin')
  getTeacherAnalytics() {
    return this.schoolsService.getAnalytics();
  }
}
