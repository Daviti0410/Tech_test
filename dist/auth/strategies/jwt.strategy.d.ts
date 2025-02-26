import { Strategy } from 'passport-jwt';
import { UsersService } from '../../modules/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UsersService);
    validate(payload: any): Promise<{
        key: any;
        userName: any;
        isAdmin: any;
    }>;
}
export {};
