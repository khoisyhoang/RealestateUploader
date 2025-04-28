import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express();
import cors from 'cors';

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

mongoose.connect(process.env.MONGO_URI);

// import routes
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.listen(4000, () => {
  console.log('Server is running on port 4000!');
});