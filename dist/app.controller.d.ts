import { AuthService } from './auth/auth.service';
import { Response } from 'express';
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any, res: Response): Promise<void>;
    logout(res: Response): Promise<void>;
    register(userName: string, password: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("./modules/users/users.model").User & {
            _id: any;
        };
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: any;
        data?: undefined;
    }>;
}
