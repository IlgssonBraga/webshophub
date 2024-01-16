import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert  } from "typeorm";
import * as crypto from 'crypto';
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


    @BeforeInsert()
    save() {
        const hash = crypto.createHash('sha256');

        hash.update(this.password);

        const passwordHashed = hash.digest('hex');
        
        this.password = passwordHashed;
    }
}