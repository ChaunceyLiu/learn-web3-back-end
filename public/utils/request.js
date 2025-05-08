"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestUrl = exports.headersParams = exports.passphrase = exports.apiKey = exports.secretKey = void 0;
exports.fetchHttp = fetchHttp;
const cryptoJS = require('crypto-js');
const { Web3 } = require('web3');
const apiBaseUrl = 'https://www.okx.com';
const web3RpcUrl = 'https://.....pro';
const privateKey = '0x...xxx';
const chainId = '1';
const fromTokenAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const toTokenAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const userWalletAddress = '0x...35';
exports.secretKey = 'C353FBCDB0F893768DDD188743FCD6CF';
exports.apiKey = '66bef7e6-2ace-423e-a3ad-9e9bfb2171a0';
exports.passphrase = '213510Lcx+';
const date = new Date();
const timestamp = date.toISOString();
const web3 = new Web3(new Web3.providers.HttpProvider(web3RpcUrl));
const headersParams = (api) => ({
    'Content-Type': 'application/json',
    'OK-ACCESS-KEY': exports.apiKey,
    'OK-ACCESS-SIGN': cryptoJS.enc.Base64.stringify(cryptoJS.HmacSHA256(timestamp + 'GET' + api, exports.secretKey)),
    'OK-ACCESS-TIMESTAMP': timestamp,
    'OK-ACCESS-PASSPHRASE': exports.passphrase,
});
exports.headersParams = headersParams;
const getRequestUrl = (api, queryParams) => {
    return apiBaseUrl + api + '?' + new URLSearchParams(queryParams).toString();
};
exports.getRequestUrl = getRequestUrl;
async function fetchHttp(url, headers, body) {
    try {
        const response = await fetch(url, {
            headers: headers,
            method: 'GET',
        });
    }
    catch (error) {
        console.error('请求失败:', error);
    }
}
//# sourceMappingURL=request.js.map