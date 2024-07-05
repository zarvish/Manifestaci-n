// index.js
import express from 'express';
import cors from 'cors';
import universityRoutes from './routes/universityRoutes.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Error handling middleware
app.use(errorMiddleware);

app.use('/api', universityRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
