import { NoteRepository, Note } from '../../../libs/notes-core/src'; 
import NoteModel from '../models/Note'; // Перевірте назву файлу моделі (можливо Note.ts)

export class SequelizeNoteRepository implements NoteRepository {
  async create(note: Note): Promise<Note> {
    const created = await NoteModel.create(note as any); 
    return created.get({ plain: true }) as Note;
  }

  async findAll(): Promise<Note[]> {
    const notes = await NoteModel.findAll();
    return notes.map(n => n.get({ plain: true }) as Note);
  }
}