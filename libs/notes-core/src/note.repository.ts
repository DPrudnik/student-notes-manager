import { Note } from './note.entity';

export interface NoteRepository {
  create(note: Note): Promise<Note>;
  findAll(): Promise<Note[]>;
}
