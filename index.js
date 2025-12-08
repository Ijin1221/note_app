import { configDotenv } from 'dotenv';
import express from 'express';
import { userRouter } from './routes/userRoutes.js';
import { noteRouter } from './routes/noteRoutes.js';
const app = express();

configDotenv();
app.use(express.json());

const PORT = process.env.PORT;
app.get('/', (req, res) => {
  res.send('server running');
});

app.use('/note-notes', noteRouter);
app.use('/note-users', userRouter);

app.listen( PORT, () => {
  console.log(`server - http://localhost:${PORT}`);
});
