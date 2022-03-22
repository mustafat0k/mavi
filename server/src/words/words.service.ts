import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWordInput } from './dto/create-word.input';
import { UpdateWordInput } from './dto/update-word.input';
import { Word } from './entities/word.entity';

@Injectable()
export class WordsService {
  constructor( @InjectRepository(Word) private wordsRepository: Repository<Word> ){}
  create(createWordInput: CreateWordInput) {
    const newWord = this.wordsRepository.create(createWordInput)
    return this.wordsRepository.save(newWord);
  }

  findAll() {
    return this.wordsRepository.find();
  }

  findOne(id: number) {
    return this.wordsRepository.findOneOrFail(id);
  }

  update(id: number, updateWordInput: UpdateWordInput) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
