import { Request, Response } from 'express';
import { IUserService } from './DTOs/UserDTO';

export class UserController {
    private userService: IUserService;

    constructor(userService: IUserService){
        this.userService = userService
    }
    async users(req:Request, res:Response){
        const users = await this.userService.findAll();
        return res.json(users);
    }
}