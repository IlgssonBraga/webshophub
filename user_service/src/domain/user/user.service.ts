import { IUser, IUserService } from "./DTOs/UserDTO";
import { userRepository } from './user.repository';

export class UserService implements IUserService{
    public async findAll(): Promise<IUser[]> {
        const users = await userRepository.find({select:{
            id:true,
            username: true,
            first_name: true,
            last_name: true,
            
        }});
        return users;
    }
    
    public async findById(id:number): Promise<IUser | null> {
        const user = await userRepository.findOne({ where: { id },
            select:{
            id:true,
            username: true,
            first_name: true,
            last_name: true,
        } });
        return user;
    } 

    public async deleteById(id:number): Promise<void> {
        await userRepository.delete(id);
    }

    public async createUser(user:IUser): Promise<IUser | null> {
        
        const insertUser = userRepository.create(user);
        await userRepository.save(insertUser);
        const userCreated = this.findById(insertUser.id)
        return userCreated;
    }

    public async updateUser(user:IUser, id:number): Promise<IUser> {
        await userRepository.update(id,user);
        return user; 
    }
}