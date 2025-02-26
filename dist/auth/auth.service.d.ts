import { HttpStatus } from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../modules/users/users.model';
import { Response } from 'express';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(userName: string, password: string): Promise<any>;
    login(user: User, res: Response): Promise<void>;
    logout(res: Response): Promise<void>;
    registerUser(userName: string, password: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: User & {
            _id: any;
        };
    } | {
        statusCode: HttpStatus;
        message: any;
        data?: undefined;
    }>;
}
