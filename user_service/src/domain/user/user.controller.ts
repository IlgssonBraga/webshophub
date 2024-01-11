import { Request, Response } from 'express'; 
import { UserService } from './user.service';
export class UserController {
    constructor(private userService: UserService) {
    }
    
    public async users(req: Request, res: Response){ 
        const users = await this.userService.findAll();
        return res.json(users);
    }
}