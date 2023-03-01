import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity('Students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number
    @Column({length: 30, type: 'text'})
    name: string
    @Column({type: 'text'})
    email: string

}