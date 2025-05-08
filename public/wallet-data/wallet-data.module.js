"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletDataModule = void 0;
const common_1 = require("@nestjs/common");
const wallet_data_service_1 = require("./wallet-data.service");
const wallet_data_controller_1 = require("./wallet-data.controller");
let WalletDataModule = class WalletDataModule {
};
exports.WalletDataModule = WalletDataModule;
exports.WalletDataModule = WalletDataModule = __decorate([
    (0, common_1.Module)({
        controllers: [wallet_data_controller_1.WalletDataController],
        providers: [wallet_data_service_1.WalletDataService],
    })
], WalletDataModule);
//# sourceMappingURL=wallet-data.module.js.map