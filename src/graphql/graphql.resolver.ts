// src/graphql/graphql.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeachersService } from '../teachers/teachers.service';
import { SchoolsService } from '../schools/schools.service';
import { Teacher } from '../teachers/entities/teacher.entity';
import { School } from '../schools/entities/school.entity';
import { CreateTeacherDto } from '../teachers/dto/create-teacher.dto';
import { CreateSchoolDto } from '../schools/dto/create-school.dto';

@Resolver()
export class GraphqlResolver {
  constructor(
    private readonly teachersService: TeachersService,
    private readonly schoolsService: SchoolsService,
  ) {}

  @Query(() => String)
  hello() {
    return 'Hello from GraphQL API';
  }

  @Query(() => [Teacher], { name: 'teachers' })
  getAllTeachers() {
    return this.teachersService.findAll();
  }

  @Query(() => [School], { name: 'schools' })
  getAllSchools() {
    return this.schoolsService.findAll();
  }

  @Query(() => Teacher, { nullable: true, name: 'teacher' })
  getTeacher(@Args('id', { type: () => Int }) id: number) {
    return this.teachersService.findOne(id);
  }

  @Query(() => School, { nullable: true, name: 'school' })
  getSchool(@Args('id', { type: () => Int }) id: number) {
    return this.schoolsService.findOne(id);
  }

  @Mutation(() => Teacher)
  createTeacher(@Args('input') input: CreateTeacherDto) {
    return this.teachersService.create(input);
  }

  @Mutation(() => School)
  createSchool(@Args('input') input: CreateSchoolDto) {
    return this.schoolsService.create(input);
  }
}
