import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express();
mongoose.connect(process.env.MONGO_URI);

// import routes
import userRouter from './routes/user.router.js';


app.use('/api/user', userRouter);

app.listen(4000, () => {
  console.log('Server is running on port 4000!');
});