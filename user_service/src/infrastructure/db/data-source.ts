import "reflect-metadata";
import { DataSource } from "typeorm"
import { User } from "../../domain/user/user.model";

import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSOWRD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ["src/infrastructure/db/migrations/*.ts"],
    subscribers: [],
    migrationsTableName: "migrations"
})
