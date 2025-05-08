"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const express = require('express');
const expressServer = express();
expressServer.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});
const createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance), {
        logger: ['error', 'warn'],
        bodyParser: true,
    });
    await app.init();
    return expressInstance;
};
const initializedApp = createNestServer(expressServer);
exports.default = async (req, res) => {
    await initializedApp;
    expressServer(req, res, (err) => {
        if (err) {
            console.error('Request handling error:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};
//# sourceMappingURL=vercel.js.map