import express from 'express';
import { deleteUserCtrl, registerUserCtrl } from '../controller/userCtrl.js';

export const userRouter = express.Router();

userRouter.post('/userRegister', registerUserCtrl);

userRouter.post('/deleteUser', deleteUserCtrl);
