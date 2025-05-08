"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletDataService = void 0;
const common_1 = require("@nestjs/common");
let WalletDataService = class WalletDataService {
    create(createWalletDatumDto) {
        return 'This action adds a new walletDatum';
    }
    findAll() {
        return `This action returns all walletData`;
    }
    findOne(id) {
        return `This action returns a #${id} walletDatum`;
    }
    update(id, updateWalletDatumDto) {
        return `This action updates a #${id} walletDatum`;
    }
    remove(id) {
        return `This action removes a #${id} walletDatum`;
    }
    async getRpcSepolia(params) {
        try {
            const res = await fetch('https://rpc.sepolia.ethpandaops.io', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params),
            });
            if (!res.ok) {
                const errorData = await res.text();
                throw new Error(`RPC请求失败: ${res.status} ${res.statusText}\n${errorData}`);
            }
            const data = await res.json();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.WalletDataService = WalletDataService;
exports.WalletDataService = WalletDataService = __decorate([
    (0, common_1.Injectable)()
], WalletDataService);
//# sourceMappingURL=wallet-data.service.js.map