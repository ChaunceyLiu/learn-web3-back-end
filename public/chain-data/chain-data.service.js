"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainDataService = void 0;
const common_1 = require("@nestjs/common");
const request_1 = require("../utils/request");
const okx_api_1 = require("okx-api");
let ChainDataService = class ChainDataService {
    create(createChainDatumDto) {
        return 'This action adds a new chainDatum';
    }
    findAll() {
        return `This action returns all chainData`;
    }
    findOne(id) {
        return `This action returns a #${id} chainDatum`;
    }
    update(id, updateChainDatumDto) {
        return `This action updates a #${id} chainDatum`;
    }
    remove(id) {
        return `This action removes a #${id} chainDatum`;
    }
    async getSupportedChainData() {
        const client = new okx_api_1.RestClient({
            apiKey: request_1.apiKey,
            apiSecret: request_1.secretKey,
            apiPass: request_1.passphrase,
        }, 'demo', undefined, {
            headers: { 'OK-ACCESS-PROJECT': '1fe60d3da8894a002a2c6cd74de9b15c' },
        });
        const res = await client.getPrivate('/api/v5/wallet/chain/supported-chains');
        return res;
    }
    async getCurrenciesPrice(params) {
        const client = new okx_api_1.RestClient({
            apiKey: request_1.apiKey,
            apiSecret: request_1.secretKey,
            apiPass: request_1.passphrase,
        }, 'demo', undefined, {
            headers: { 'OK-ACCESS-PROJECT': '1fe60d3da8894a002a2c6cd74de9b15c' },
        });
        const res = await client.postPrivate('/api/v5/wallet/token/current-price', JSON.parse(params.q));
        return res;
    }
    async getHistoricalPrice(params) {
        const client = new okx_api_1.RestClient({
            apiKey: request_1.apiKey,
            apiSecret: request_1.secretKey,
            apiPass: request_1.passphrase,
        });
        try {
            const res = await client.getPrivate(`/api/v5/wallet/token/historical-price?chainIndex=${params.chainIndex}&limit=20&period=${params.period}&tokenAddress=`);
            return res;
        }
        catch (error) {
            console.error('Error:', error);
            throw new Error('Failed to fetch historical price');
        }
    }
    async getRealTimePrice(params) {
        const client = new okx_api_1.RestClient({
            apiKey: request_1.apiKey,
            apiSecret: request_1.secretKey,
            apiPass: request_1.passphrase,
        });
        try {
            const res = await client.postPrivate(`/api/v5/wallet/token/real-time-price`, params);
            return res?.map((item) => ({
                ...item,
                time: new Date().getTime(),
                price: (Math.random() * 1000).toString(),
            }));
        }
        catch (error) {
            console.error('Error:', error);
            throw new Error('Failed to fetch real-time price');
        }
    }
};
exports.ChainDataService = ChainDataService;
exports.ChainDataService = ChainDataService = __decorate([
    (0, common_1.Injectable)()
], ChainDataService);
//# sourceMappingURL=chain-data.service.js.map