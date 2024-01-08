import express from 'express';
import dotenv from 'dotenv';
import routes from '../shared/routes/index';

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`)
});