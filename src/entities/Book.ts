import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Author } from "./Author"


enum Category{
    Romance,
    Science,
    Fiction,
    Drama,
    Action,
    Adventure,
    Poetry,
    Mystery,
    Thriller
}

@Entity('Books')
export class Book{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'text'})
    title: string
    @Column('int')
    category: Category
    @Column({type: 'text'})
    publisher: string
 
    @ManyToOne(() => Author, author => author.book)
    @JoinColumn({name: 'authorId'})
    author: Author
}