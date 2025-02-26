import { GeminiService } from './gemini.service';
export declare class GeminiController {
    private readonly geminiService;
    constructor(geminiService: GeminiService);
    executeCode(code: string): Promise<{
        beautifiedCode: string;
    }>;
}
