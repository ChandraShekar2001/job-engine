import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/login.input';
import { User } from '../users/models/user.model';
import { GQLContext } from '@job-engine/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() context: GQLContext
  ) {
    return this.authService.login(loginInput, context.res);
  }
}
