import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,  
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      autoLoadEntities: true,
      synchronize: true  
    }),
    UsersModule,
    BooksModule
  ],
})
export class AppModule {}
