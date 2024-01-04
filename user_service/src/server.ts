import express from 'express';
import routes from './routes/index';
import * as dotevnv from "dotenv";

dotevnv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});