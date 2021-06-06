import express from 'express';
import bodyParser from 'body-parser';
import dotenv  from "dotenv";

import { router } from './routes';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

export { app };