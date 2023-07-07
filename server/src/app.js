import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { notFound, errorHandler } from './middleware.js';
import mainRouter from './routes/mainRouter.js';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: 'Server Online' });
});

app.use('/api', mainRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
