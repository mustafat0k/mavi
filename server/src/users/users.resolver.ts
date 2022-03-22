import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(of=>User)
export class UsersResolver {
    constructor(private usersService: UsersService){}

    @Query(returns => [User])
    async getUser(@Args('id',{type:()=>Int}) id:number): Promise<User>{
        return this.usersService.findOne(id);
    }

    @Query(returns => [User])
    async users(): Promise<User[]>{
        return this.usersService.findAll();
    }

    @ResolveField(returns=>Owner)
    owner(@Parent() user:User):Promise<Owner>{
        return this.usersService.getOwner(user.ownerId);
    }

    @Mutation(returns=>User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
        return this.usersService.createUser(createUserInput);        
    }
}
