import { IUser, IUserService } from "./DTOs/UserDTO";
import { userRepository } from './user.repository';

export class UserService implements IUserService{
    public async findAll(): Promise<IUser[]> {
        const users = await userRepository.find();
        return users;
    }
    
    public async findById(id:number): Promise<IUser | null> {
        const user = await userRepository.findOne({ where: { id } });
        return user;
    } 

    public async deleteById(id:number): Promise<void> {
        await userRepository.delete(id);
    }

    public async createUser(user:IUser): Promise<IUser> {
        userRepository.create(user);
        await userRepository.save(user);
        return user;
    }

    public async updateUser(user:IUser, id:number): Promise<IUser> {
        await userRepository.update(id,user);
        return user; 
    }
}