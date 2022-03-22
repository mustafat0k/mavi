import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports:[TypeOrmModule.forFeature([User]), OwnersModule ],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
