import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    insertNewUser(userName: string, password: string): Promise<User & {
        _id: any;
    }>;
    findOne(userName: string): Promise<User | null>;
    getUserData(req: any): Promise<{
        isAdmin: any;
        userName: any;
    }>;
}
