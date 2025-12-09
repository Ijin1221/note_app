import express from 'express';
import { createNoteCtrl } from '../controller/noteCtrl.js';

export const noteRouter = express.Router();

noteRouter('/createNote', createNoteCtrl)