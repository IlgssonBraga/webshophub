import { Request, Response } from 'express';
import { UserService } from './user.service';

const userService = new UserService;

export class UserController {
    async users(req:Request, res:Response){
        const users = await userService.findAll();
        return res.json(users);
    }
}