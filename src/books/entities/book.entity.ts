import { Entity, Column, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Book {
  @Column({primary : true, generated : true})
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.book)
  users: User[];
}
