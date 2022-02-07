import { Field, Query, ObjectType, Resolver } from '@nestjs/graphql';

@ObjectType('Test')
class TestDto {
  @Field()
  readonly hello!: string;
}
@Resolver(() => TestDto)
export class AppResolver {
  @Query(() => TestDto)
  async get(): Promise<TestDto> {
    return {
      hello: 'world',
    };
  }
}
