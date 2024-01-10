import { Router } from 'express';
import { UserController } from '../../../domain/user/user.controller';

const userRouter =  Router();

const userController = new UserController();

userRouter.get('/users', userController.users);

export default userRouter;