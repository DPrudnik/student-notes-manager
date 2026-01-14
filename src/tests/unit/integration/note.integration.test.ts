import sequelize from '../../../database/index';
import Student from '../../../database/models/Student';
import Note from '../../../database/models/Note';

describe('Note – integration test', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('should save note to database', async () => {
    const student = await Student.create({ name: 'Test student' });

    const note = await Note.create({
      title: 'Integration title',
      content: 'Integration content',
      studentId: student.id,
    });

    expect(note.id).toBeDefined();
  });
});
