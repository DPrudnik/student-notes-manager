import Note from '../database/models/Note';

export class NoteService {
  static getAll() {
    return Note.findAll();
  }

  static create(title: string, content: string, studentId: number) {
    return Note.create({ title, content, studentId });
  }
  

  static deleteById(id: number) {
    return Note.destroy({ where: { id } });
  }
}
