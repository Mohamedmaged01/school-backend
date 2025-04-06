import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateSchoolDto {
  @Field()
  name: string;

  @Field()
  address: string;
}
