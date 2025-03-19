import mongoose from 'mongoose';
import { MONGO_URI } from '../constants/env';

export const connectToDatabase = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log('Connected to Database successfully');
	} catch (error) {
		console.error('Failed to connect to Database', error);
		process.exit(1);
	}
};
