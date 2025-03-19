import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectToDatabase } from '../database/mongoose';
import { PORT } from '../constants/env';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, async () => {
	await connectToDatabase();
	console.log(`Server is running on http://localhost:${PORT}`);
});
