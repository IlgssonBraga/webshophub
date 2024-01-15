export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string
}

export interface IUserService {
    findAll(): Promise<IUser[]>;
    findById(id:Number): Promise<IUser | null>;
    deleteById(id:Number): Promise<void>;
    createUser(user:IUser): Promise<IUser>;
    updateUser(user:IUser, id:Number): Promise<IUser>;
}