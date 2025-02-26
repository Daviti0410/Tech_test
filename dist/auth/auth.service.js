"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../modules/users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(userName, password) {
        const user = await this.userService.findOne(userName);
        const isPasswordMatches = user && (await bcrypt.compare(password, user.password));
        if (isPasswordMatches) {
            return user;
        }
        return null;
    }
    async login(user, res) {
        const payload = { userName: user.userName, sub: user.key, isAdmin: user.isAdmin };
        const access_token = this.jwtService.sign(payload);
        res.cookie('auth-cookie', access_token, {
            maxAge: Number(process.env.COOKIES_EXPIRE_TIME_MS) || 3000000,
        });
        res.json({ statusCode: common_1.HttpStatus.OK, message: 'Login success' });
    }
    async logout(res) {
        res.cookie('auth-cookie', '', { maxAge: 0 });
        res.json({ statusCode: common_1.HttpStatus.OK, message: 'Logout success' });
    }
    async registerUser(userName, password) {
        try {
            const user = await this.userService.insertNewUser(userName, password);
            if (user) {
                return {
                    statusCode: common_1.HttpStatus.OK,
                    message: 'New User was added successfully',
                    data: user,
                };
            }
            return {
                statusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                message: 'User already exists , provide another username',
            };
        }
        catch (error) {
            return {
                statusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                message: error.message,
            };
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map