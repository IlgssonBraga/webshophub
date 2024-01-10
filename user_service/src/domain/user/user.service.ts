import { IUserService } from "./DTOs/UserDTO";
import { User } from "./user.model";
import { userRepository } from './user.repository';

export class UserService implements IUserService {
    async findAll(): Promise<User[]> {
        const users = await userRepository.find();
        return users;
    }
}