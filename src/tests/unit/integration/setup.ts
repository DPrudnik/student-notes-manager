import sequelize from '../../../database';
import '../../../database/models/Student';
import '../../../database/models/Note';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});
