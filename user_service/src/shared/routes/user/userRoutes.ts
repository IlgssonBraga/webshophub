import 'reflect-metadata';
import { Router } from 'express';
import { UserController } from '../../../domain/user/user.controller';
import { Injection } from '../../utils/dependecy.injection.config.ts';

const userRouter =  Router();
const userInjection = new Injection();
const userController = userInjection.addSingleton<UserController>(UserController)
userRouter.get('/users', userController.users);

export default userRouter;