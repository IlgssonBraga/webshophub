import { Request, Response } from 'express'; 
import { UserService } from './user.service';
export class UserController {
    constructor(private userService: UserService) {
    }
    
    public async users(req: Request, res: Response){ 
        const users = await this.userService.findAll();
        return res.json(users);
    }

    public async user(req: Request, res: Response){ 
        const { id  } = req.params
        const user = await this.userService.findById(parseInt(id));
        if (user) {
            return res.json(user);  
        }
        return res.status(404).json({
            message:"User not found"
        });
    }

    public async delete(req: Request, res: Response){ 
        const { id  } = req.params;
        const user = await this.userService.findById(parseInt(id));
        if (user) {
            await this.userService.deleteById(parseInt(id))
            return res.status(204).json();  
        }
        return res.status(404).json({
            message:"User not found"
        });
    }

    public async store(req: Request, res: Response){ 
        const reqBody = req.body;
        const findUser = await this.userService.findByUsername(req.body.username);
        if(findUser){
            return res.status(400).json({
                error: "Username already exists"
            });  
        }
        const user = await this.userService.createUser(reqBody);
        return res.status(201).json(user);
    }

    public async update(req: Request, res: Response){ 
        const reqBody = req.body;
        const { id } = req.params;
        const findUserById = await this.userService.findById(parseInt(id));
        if(!findUserById){
            return res.status(404).json({
                error: "User not found"
            });  
        }

        if(req.body.username){
            const findUserByUsername = await this.userService.findByUsername(req.body.username);
            if(findUserByUsername && findUserByUsername.username != findUserById.username){
                return res.status(400).json({
                    error: "Username already exists"
            });  
        }   
        }
        
        const user = await this.userService.updateUser(reqBody,parseInt(id));
        return res.status(200).json(user);
    }
}