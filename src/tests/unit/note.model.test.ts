import Note from '../../database/models/Note';

describe('Note model – unit tests', () => {
  it('should build a Note instance with correct fields', () => {
    const note = Note.build({
      title: 'Unit test title',
      content: 'Unit test content',
    } as any);

    expect(note).toBeDefined();
    expect(note.title).toBe('Unit test title');
    expect(note.content).toBe('Unit test content');
  });

  it('should allow creating a note without id', () => {
    const note = Note.build({
      title: 'No ID test',
      content: 'ID is optional',
    } as any);

    expect(note.id).toBeNull(); // ← ОЦЕ ВИПРАВЛЕННЯ
  });
});
