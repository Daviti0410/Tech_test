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
exports.GeminiService = void 0;
const common_1 = require("@nestjs/common");
const generative_ai_1 = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();
let GeminiService = class GeminiService {
    constructor() {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is missing in .env');
        }
        this.genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    }
    async executeCode(prompt) {
        try {
            const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
            const result = await model.generateContent({
                contents: [
                    {
                        role: 'user',
                        parts: [
                            {
                                text: `You must return response without markdown, explanation, or any extra text, provide your version of the code that i will send you.\n\n${prompt}`,
                            },
                        ],
                    },
                ],
            });
            if (!(result === null || result === void 0 ? void 0 : result.response) || typeof result.response.text !== 'function') {
                throw new Error('Invalid response from Gemini API');
            }
            let response = result.response.text();
            response = response.replace(/^```(\w+)?\n/, '').replace(/\n```$/, '');
            return response;
        }
        catch (error) {
            console.error('Error executing Gemini API:', error);
            throw new Error('Failed to execute code using Gemini API');
        }
    }
};
GeminiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GeminiService);
exports.GeminiService = GeminiService;
//# sourceMappingURL=gemini.service.js.map