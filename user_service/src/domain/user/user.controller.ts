import { Request, Response } from 'express'; 
import { UserService } from './user.service';

export class UserController {

    constructor(private userService: UserService){}
    
    async users(){
        const users = await this.userService.findAll();
        // return res.json(users);
        return users
    }
}