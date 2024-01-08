import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../domain/user/models/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "userservice",
    password: "userservicedb",
    database: "userservicedb",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
