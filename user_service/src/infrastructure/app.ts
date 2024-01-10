import "reflect-metadata";
import express from 'express';
import dotenv from 'dotenv';
import routes from '../shared/routes/index';
import { AppDataSource } from "./db/data-source"
import {User} from '../domain/user/user.model'

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.use(routes);

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.first_name = "Ilgsson"
    user.last_name = "Braga"
    user.username = "ilgssonbraga"
    user.password = "123456"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`)
});