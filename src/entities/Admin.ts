import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity('Admin')
export class Admin{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'text'})
    name: string
    @Column({type: 'text', length: 5})
    token: string
}