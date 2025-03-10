import { AbstractModel } from '@job-engine/graphql';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;
}
