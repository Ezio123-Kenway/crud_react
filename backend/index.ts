import cors from 'cors';
import express from 'express';
import { menuRouter } from './menuRouter';
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/menu', menuRouter);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));