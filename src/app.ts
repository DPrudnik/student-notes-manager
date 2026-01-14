import express, { Application, Request, Response } from 'express';
import noteRoutes from './routes/notes.routes';

const app: Application = express();

app.use(express.json());

// 🔹 ПІДКЛЮЧАЄМО NOTES ROUTES
app.use('/notes', noteRoutes);

// тестовий маршрут
app.get('/', (_req: Request, res: Response) => {
  res.send('Student Notes Manager API works!');
});

export default app;
