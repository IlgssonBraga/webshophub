export interface IUser {
    id: Number;
    first_name: String;
    last_name: String;
    username: String;
    password: String
}

export interface IUserService {
    findAll(): Promise<IUser[]>;
}