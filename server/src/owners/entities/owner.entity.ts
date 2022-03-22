import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(type=>Int)
  id: number;
  
  @Column()
  @Field()
  name: string;
  
  @OneToMany(()=>User, user=>user.owner)
  @Field(type=>[User], {nullable:true})
  users?: User[];
  
}
