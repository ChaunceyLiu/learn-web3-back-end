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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainDataController = void 0;
const common_1 = require("@nestjs/common");
const chain_data_service_1 = require("./chain-data.service");
const create_chain_datum_dto_1 = require("./dto/create-chain-datum.dto");
let ChainDataController = class ChainDataController {
    chainDataService;
    constructor(chainDataService) {
        this.chainDataService = chainDataService;
    }
    create(createChainDatumDto) {
        return this.chainDataService.create(createChainDatumDto);
    }
    async getHistoricalPrice(params) {
        return await this.chainDataService.getHistoricalPrice(params);
    }
    async getSupportedChainData() {
        return await this.chainDataService.getSupportedChainData();
    }
    async getCurrenciesPrice(params) {
        return await this.chainDataService.getCurrenciesPrice(params);
    }
    async getRealTimePrice(queryParams) {
        return await this.chainDataService.getRealTimePrice(queryParams);
    }
};
exports.ChainDataController = ChainDataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chain_datum_dto_1.CreateChainDatumDto]),
    __metadata("design:returntype", void 0)
], ChainDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/getHistoricalPrice'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChainDataController.prototype, "getHistoricalPrice", null);
__decorate([
    (0, common_1.Get)('/getSupportedChainData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChainDataController.prototype, "getSupportedChainData", null);
__decorate([
    (0, common_1.Get)('/getCurrenciesPrice'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChainDataController.prototype, "getCurrenciesPrice", null);
__decorate([
    (0, common_1.Post)('/getRealTimePrice'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChainDataController.prototype, "getRealTimePrice", null);
exports.ChainDataController = ChainDataController = __decorate([
    (0, common_1.Controller)('chain-data'),
    __metadata("design:paramtypes", [chain_data_service_1.ChainDataService])
], ChainDataController);
//# sourceMappingURL=chain-data.controller.js.map