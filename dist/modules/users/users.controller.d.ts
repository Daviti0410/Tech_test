import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserData(req: any): Promise<{
        isAdmin: any;
        userName: any;
    }>;
    createUser(body: any): Promise<(import("./users.model").User & {
        _id: any;
    }) | {
        message: string;
    }>;
}
