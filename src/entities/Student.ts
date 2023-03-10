import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"
import { Book } from "./Book"

@Entity('Students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'varchar'})
    name: string
    @Column({type: 'varchar'})
    email: string
    
    @Column({type: 'varchar', nullable: true})
    rentedBooks: string
}