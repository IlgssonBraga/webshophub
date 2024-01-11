import { AppDataSource } from '../../infrastructure/db/data-source';
import { User } from './user.model';

export const userRepository = AppDataSource.getRepository(User);