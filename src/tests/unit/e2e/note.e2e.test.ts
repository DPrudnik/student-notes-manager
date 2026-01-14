import request from 'supertest';
import app from '../../../app';
import sequelize from '../../../database';
import Student from '../../../database/models/Student';

describe('Note API – E2E tests', () => {
  let studentId: number;

  beforeAll(async () => {
    // підключаємось до БД
    await sequelize.sync({ force: true });

    // створюємо студента
    const student = await Student.create({
      name: 'E2E Student',
    });

    studentId = student.id;
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('POST /notes - should create a note', async () => {
    const response = await request(app)
      .post('/notes')
      .send({
        title: 'E2E title',
        content: 'E2E content',
        studentId,
      });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('E2E title');
    expect(response.body.studentId).toBe(studentId);
  });

  it('GET /notes - should return notes list', async () => {
    const response = await request(app).get('/notes');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
