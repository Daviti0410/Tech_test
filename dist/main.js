"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ origin: true, credentials: true });
    await app.listen(process.env.APP_PORT);
}
bootstrap()
    .catch((err) => {
    console.error('Error during application bootstrap:', err);
});
//# sourceMappingURL=main.js.map