import { Injectable } from '@nestjs/common';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  private teachers: Teacher[] = [
    {
      id: 1,
      name: 'maged',
      subject: 'Mathematics',
      schoolId: 1,
    },
    {
      id: 2,
      name: 'mohamed',
      subject: 'Physics',
      schoolId: 2,
    },
    {
      id: 3,
      name: 'ahmed',
      subject: 'Chemistry',
      schoolId: 3,
    },
    {
      id: 4,
      name: 'ali',
      subject: 'Biology',
      schoolId: 4,
    },
    {
      id: 5,
      name: 'bassem',
      subject: 'History',
      schoolId: 1,
    },
  ];
  private nextId = this.teachers.length + 1;

  create(createTeacherDto: CreateTeacherDto): Teacher {
    const teacher: Teacher = {
      id: this.nextId++,
      ...createTeacherDto,
    };
    this.teachers.push(teacher);
    return teacher;
  }

  findAll(): Teacher[] {
    return this.teachers;
  }

  findOne(id: number): Teacher {
    const teacher = this.teachers.find((teacher) => teacher.id === id);
    if (!teacher) {
      throw new Error(`Teacher with id ${id} not found`);
    }
    return teacher;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto): Teacher {
    const teacherIndex = this.teachers.findIndex(
      (teacher) => teacher.id === id,
    );
    if (teacherIndex === -1) {
      throw new Error(`Teacher with id ${id} not found`);
    }

    this.teachers[teacherIndex] = {
      ...this.teachers[teacherIndex],
      ...updateTeacherDto,
    };

    return this.teachers[teacherIndex];
  }

  remove(id: number): Teacher | null {
    const teacherIndex = this.teachers.findIndex(
      (teacher) => teacher.id === id,
    );
    if (teacherIndex === -1) return null;

    const teacher = this.teachers[teacherIndex];
    this.teachers.splice(teacherIndex, 1);
    return teacher;
  }
}
