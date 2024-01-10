import 'reflect-metadata';
import { Router, Request, Response } from 'express'; 
import { UserController } from '../../../domain/user/user.controller';
import { Injection } from '../../utils/dependecy.injection.config.ts';
import { UserService } from '../../../domain/user/user.service';
 
const userRouter =  Router();
const userInjection = new Injection();
const userService = userInjection.addSingleton<UserService>(UserService);
const userController = userInjection.addSingleton<UserController>(UserController, userService);
userRouter.get('/users', async (req,res)=> {
    const ab = await userController.users();
    console.log('aaa', ab)
    res.json({a:"teste"})
});

export default userRouter;