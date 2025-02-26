"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const meetings_module_1 = require("./modules/meetings/meetings.module");
const image_module_1 = require("./modules/image/image.module");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./auth/auth.module");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const gemini_controller_1 = require("./gemini/gemini.controller");
const gemini_service_1 = require("./gemini/gemini.service");
const sub_code_review_module_1 = require("./modules/sub-code-review/sub-code-review.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/tech_talks'),
            meetings_module_1.MeetingsModule,
            image_module_1.ImageModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            sub_code_review_module_1.SubCodeReviewModule,
        ],
        providers: [app_service_1.AppService, gemini_service_1.GeminiService],
        controllers: [app_controller_1.AppController, gemini_controller_1.GeminiController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map