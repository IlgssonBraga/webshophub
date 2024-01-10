import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1704729733898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                first_name VARCHAR(255),
                last_name VARCHAR(255),
                username VARCHAR(255),
                password VARCHAR(255)
            )`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE users`,
        ) // reverts things made in "up" method
    }

}
