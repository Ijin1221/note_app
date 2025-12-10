import express from 'express';
import { deleteUserCtrl, registerUserCtrl, userLoginCtrl } from '../controller/userCtrl.js';

export const userRouter = express.Router();

userRouter.post('/userRegister', registerUserCtrl);
userRouter.post('/userLogin', userLoginCtrl);
userRouter.post('/deleteUser', deleteUserCtrl);
