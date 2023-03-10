import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm"
import { Author } from "./Author"



@Entity('Books')
export class Book{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'varchar'})
    title: string
    @Column('varchar')
    category: string
    @Column({type: 'varchar'})
    publisher: string
 
    @ManyToOne(() => Author, author => author.book)
    @JoinColumn({name: 'authorId'})
    author: Author

    @Column({type: 'int2'})
    isDisponible: number
}