import { IUser, IUserService } from "./DTOs/UserDTO";
import { userRepository } from './user.repository';

export class UserService implements IUserService {
    async findAll(): Promise<IUser[]> {
        const users = await userRepository.find();
        return users;
    }
}