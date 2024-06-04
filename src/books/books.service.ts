import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(

    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>

  ) {}


  async create(createBookDto: CreateBookDto) {
    return await this.booksRepository.save(createBookDto)
  }

  async findAll() {
    return await this.booksRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  async remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
