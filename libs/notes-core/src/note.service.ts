import { Note } from './note.entity';
import { NoteRepository } from './note.repository';

export class NoteService {
  constructor(private readonly repo: NoteRepository) {}

  createNote(note: Note) {
    return this.repo.create(note);
  }

  getNotes() {
    return this.repo.findAll();
  }
}
