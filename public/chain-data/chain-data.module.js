"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainDataModule = void 0;
const common_1 = require("@nestjs/common");
const chain_data_service_1 = require("./chain-data.service");
const chain_data_controller_1 = require("./chain-data.controller");
let ChainDataModule = class ChainDataModule {
};
exports.ChainDataModule = ChainDataModule;
exports.ChainDataModule = ChainDataModule = __decorate([
    (0, common_1.Module)({
        controllers: [chain_data_controller_1.ChainDataController],
        providers: [chain_data_service_1.ChainDataService],
    })
], ChainDataModule);
//# sourceMappingURL=chain-data.module.js.map