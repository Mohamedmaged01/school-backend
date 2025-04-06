
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class School {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;
}
