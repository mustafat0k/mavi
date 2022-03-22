import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsResolver } from './words.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './entities/word.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Word])],
  providers: [WordsResolver, WordsService],
  exports: [WordsService]
})
export class WordsModule {}
