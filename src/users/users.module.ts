import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BooksModule } from 'src/books/books.module';
import { BooksService } from 'src/books/books.service';
import { Book } from 'src/books/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Book]), BooksModule],
  controllers: [UsersController],
  providers: [UsersService,BooksService]
})
export class UsersModule {}
