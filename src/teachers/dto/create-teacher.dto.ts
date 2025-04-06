import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTeacherDto {
  @Field()
  name: string;

  @Field()
  subject: string;

  @Field(() => Int)
  schoolId: number;
}
