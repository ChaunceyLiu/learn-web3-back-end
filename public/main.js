"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const morgan = require("morgan");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    });
    app.use(morgan('dev'));
    if (!process.env.VERCEL) {
        await app.listen(process.env.PORT ?? 3000);
        console.log(`Server running on port ${process.env.PORT ?? 3000}`);
    }
}
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    bootstrap();
}
//# sourceMappingURL=main.js.map