import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Word {
  @PrimaryGeneratedColumn()
    @Field(type=>Int)
    id: number;
    
    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    locale: string;

    @Column({nullable:true})
    @Field({nullable:true})
    type?: string;

}
