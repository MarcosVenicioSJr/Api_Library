import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity('Students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'varchar'})
    name: string
    @Column({type: 'varchar'})
    email: string

}