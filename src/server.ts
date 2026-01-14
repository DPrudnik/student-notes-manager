import app from './app';
import sequelize from './database';

const PORT = 3000;

(async () => {
  try {
    // Перевірка підключення до БД
    await sequelize.authenticate();
    console.log('Database connected');

    // Створення таблиць і файлу database.sqlite
    await sequelize.sync();
    console.log('Database synchronized');

    // Запуск сервера
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Database error:', error);
  }
})();

