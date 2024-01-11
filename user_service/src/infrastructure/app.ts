import "reflect-metadata";
import express from 'express';
import dotenv from 'dotenv';
import routes from '../shared/routes/index';
import { AppDataSource } from "../infrastructure/db/data-source";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.use(routes);

// establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`)
});