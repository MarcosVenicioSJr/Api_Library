import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity('Admin')
export class Admin{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'varchar'})
    name: string
    @Column({type: 'varchar', length: 8})
    token: string
}