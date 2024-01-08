import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    firstName: string

    @Column({ type: 'varchar', length: 255 })
    lastName: string

    @Column({ type: 'varchar', length: 255 })
    username: string
    
    @Column({ type: 'varchar', length: 255 })
    password: string
}
