import express from 'express';
import { createNoteCtrl, deleteNoteCtrl, listNoteByIdCtrl } from '../controller/noteCtrl.js';

export const noteRouter = express.Router();

noteRouter.post('/createNote', createNoteCtrl);
noteRouter.post('/deleteNote', deleteNoteCtrl);
noteRouter.get('/listNote', listNoteByIdCtrl);