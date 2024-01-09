import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    first_name: string

    @Column({ type: 'varchar', length: 255 })
    last_name: string

    @Column({ type: 'varchar', length: 255 })
    username: string
    
    @Column({ type: 'varchar', length: 255 })
    password: string
}
