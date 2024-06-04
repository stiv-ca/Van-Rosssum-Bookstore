import { Book } from "src/books/entities/book.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class User {

    @Column({primary : true, generated : true})
    id: number;

    @Column()
    name: string;

    @DeleteDateColumn()
    deletedAt?: Date;

    @ManyToOne(() => Book, (book) => book.users, {
        eager : true
    })
    book: Book;

}
