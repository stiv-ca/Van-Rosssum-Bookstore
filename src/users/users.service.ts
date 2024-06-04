import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class UsersService {

  constructor(

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>

  ) {}

  async create(createUserDto: CreateUserDto) {
    
    const book = await this.booksRepository.findOne({ where: {name : createUserDto.book} });

    if (!book) {
      throw new BadRequestException('Book not found');
    }
    
    return await this.usersRepository.save({
      ...createUserDto,
      book,
    });
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOneBy({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.usersRepository.softDelete({id});
  }
}
