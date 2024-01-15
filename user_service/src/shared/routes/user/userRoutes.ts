import { Router } from 'express'; 
import { UserService } from '../../../domain/user/user.service';
import { UserController } from '../../../domain/user/user.controller';
import { Injection } from '../../utils/dependecy.injection.config.ts';

 
const userRouter =  Router();
const userInjection = new Injection();
const userService = userInjection.addSingleton<UserController>(UserService);
const userController = userInjection.addSingleton<UserController>(UserController, userService);
userRouter.get('/users', (req, res) => userController.users(req,res));
userRouter.get('/users/:id', (req, res) => userController.user(req,res));
userRouter.delete('/users/:id', (req, res) => userController.delete(req,res));
userRouter.post('/users', (req, res) => userController.store(req,res));
userRouter.put('/users/:id', (req, res) => userController.update(req,res));

export default userRouter;