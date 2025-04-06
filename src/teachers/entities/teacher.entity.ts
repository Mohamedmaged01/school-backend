import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Teacher {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  subject: string;

  @Field(() => Int)
  schoolId: number;
}
