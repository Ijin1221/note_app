import express from 'express';
import { registerUserCtrl } from '../controller/userCtrl.js';

export const userRouter = express.Router();

userRouter.post('/userRegister', registerUserCtrl);