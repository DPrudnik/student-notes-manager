import { Router, Request, Response } from 'express';
import Note from '../database/models/Note';

const router = Router();

// POST /notes
router.post('/', async (req: Request, res: Response) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: 'Cannot create note' });
  }
});

// GET /notes
router.get('/', async (_req: Request, res: Response) => {
  const notes = await Note.findAll();
  res.status(200).json(notes);
});

export default router;
