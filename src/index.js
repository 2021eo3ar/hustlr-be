import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger/swagger.json' assert { type: 'json' };

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
