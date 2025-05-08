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
exports.WalletDataController = void 0;
const common_1 = require("@nestjs/common");
const wallet_data_service_1 = require("./wallet-data.service");
const create_wallet_datum_dto_1 = require("./dto/create-wallet-datum.dto");
const update_wallet_datum_dto_1 = require("./dto/update-wallet-datum.dto");
let WalletDataController = class WalletDataController {
    walletDataService;
    constructor(walletDataService) {
        this.walletDataService = walletDataService;
    }
    create(createWalletDatumDto) {
        return this.walletDataService.create(createWalletDatumDto);
    }
    findAll() {
        return this.walletDataService.findAll();
    }
    findOne(id) {
        return this.walletDataService.findOne(+id);
    }
    update(id, updateWalletDatumDto) {
        return this.walletDataService.update(+id, updateWalletDatumDto);
    }
    remove(id) {
        return this.walletDataService.remove(+id);
    }
    async getRpcSepolia(params) {
        console.log(params);
        return await this.walletDataService.getRpcSepolia(params);
    }
};
exports.WalletDataController = WalletDataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wallet_datum_dto_1.CreateWalletDatumDto]),
    __metadata("design:returntype", void 0)
], WalletDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WalletDataController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WalletDataController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wallet_datum_dto_1.UpdateWalletDatumDto]),
    __metadata("design:returntype", void 0)
], WalletDataController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WalletDataController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/rpcSepolia'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WalletDataController.prototype, "getRpcSepolia", null);
exports.WalletDataController = WalletDataController = __decorate([
    (0, common_1.Controller)('wallet-data'),
    __metadata("design:paramtypes", [wallet_data_service_1.WalletDataService])
], WalletDataController);
//# sourceMappingURL=wallet-data.controller.js.map