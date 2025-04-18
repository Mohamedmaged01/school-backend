import { Injectable } from '@nestjs/common';
import { School } from './entities/school.entity';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { TeachersService } from '../teachers/teachers.service';

@Injectable()
export class SchoolsService {
  private schools: School[] = [
    {
      id: 1,
      name: 'Cairo  School',
      address: 'Cairo',
    },
    {
      id: 2,
      name: 'Alexandria  School',
      address: ' Alexandria',
    },
    {
      id: 3,
      name: 'Giza  school',
      address: ' Giza',
    },
    {
      id: 4,
      name: 'Luxor school',
      address: ' Luxor',
    },
    {
      id: 5,
      name: 'Aswan school',
      address: ' Aswan',
    },
  ];
  private nextId = this.schools.length + 1;

  constructor(private readonly teachersService: TeachersService) {}

  create(createSchoolDto: CreateSchoolDto): School {
    const school: School = {
      id: this.nextId++,
      ...createSchoolDto,
    };
    this.schools.push(school);
    return school;
  }

  findAll(): School[] {
    return this.schools;
  }

  findOne(id: number): School | undefined {
    return this.schools.find((school) => school.id === id);
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto): School | undefined {
    const schoolIndex = this.schools.findIndex((school) => school.id === id);
    if (schoolIndex === -1) return undefined;

    this.schools[schoolIndex] = {
      ...this.schools[schoolIndex],
      ...updateSchoolDto,
    };

    return this.schools[schoolIndex];
  }

  remove(id: number): boolean {
    const schoolIndex = this.schools.findIndex((school) => school.id === id);
    if (schoolIndex === -1) return false;

    this.schools.splice(schoolIndex, 1);
    return true;
  }

  getAnalytics() {
    const schoolsWithTeachers = this.schools.map((school) => ({
      ...school,
      teacherCount: this.teachersService
        .findAll()
        .filter((teacher) => teacher.schoolId === school.id).length,
    }));

    const sorted = [...schoolsWithTeachers].sort(
      (a, b) => b.teacherCount - a.teacherCount,
    );

    return {
      mostTeachers: sorted[0] || null,
      leastTeachers: sorted[sorted.length - 1] || null,
    };
  }
}
