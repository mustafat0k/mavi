import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWordInput {
  @Field()
  name: string;

  @Field()
  locale: string;
}
