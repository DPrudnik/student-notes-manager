import express, { Application, Request, Response } from 'express';

const app: Application = express();

// Щоб сервер міг приймати JSON у запитах
app.use(express.json());

// Простий тестовий маршрут
app.get('/', (req: Request, res: Response) => {
  res.send('Student Notes Manager API works!');
});

export default app;

