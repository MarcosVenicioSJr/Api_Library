import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"


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
    @Column({type: 'text'})
    author: Author
}