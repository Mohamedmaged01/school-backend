import { Injectable } from '@nestjs/common';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
    private teachers: Teacher[] = [];
    private nextId = 1;

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

    remove(id: number): boolean {
        const teacherIndex = this.teachers.findIndex(
            (teacher) => teacher.id === id,
        );
        if (teacherIndex === -1) return false;

        this.teachers.splice(teacherIndex, 1);
        return true;
    }
}
