import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Book } from "./Book"

@Entity('Authors')
export class Author{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'varchar'})
    name: string
    @OneToMany(() => Book, book => book.author)
    book: Book[]
}