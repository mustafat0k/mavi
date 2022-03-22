import { Injectable } from '@nestjs/common';
import { Args, Int, Query } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>, private OwnersService: OwnersService  ){}

    @Query(returns =>User)
    getUser(@Args('id', {type: ()=> Int}) id:number ):Promise<User>{
        return this.usersRepository.findOne(id)
    }

    async createUser(CreateUserInput: CreateUserInput): Promise<User> {
        const newUser = this.usersRepository.create(CreateUserInput);
        return this.usersRepository.save(newUser);
    }

    async findAll(): Promise<User[]>{
        return this.usersRepository.find();
    }

    findOne(id:number): Promise<User>{
        return this.usersRepository.findOneOrFail(id)
    }

    getOwner(ownerId:number): Promise<Owner>{
        return this.OwnersService.findOne(ownerId)
    }
}
