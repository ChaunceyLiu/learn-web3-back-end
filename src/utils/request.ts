const cryptoJS = require('crypto-js'); // Import encryption modules for subsequent encryption calculations
const { Web3 } = require('web3'); // Import the Web3 library for interacting with Ethereu
const apiBaseUrl = 'https://www.okx.com'; // Define the underlying path of the request
const web3RpcUrl = 'https://.....pro'; // The URL for the Ethereum node you want to connect to
const privateKey = '0x...xxx'; // Set the private key of your wallet (replace '0x...xxx' with your actual private key). NEVER SHARE THIS WITH ANYONE!
const chainId = '1';
const fromTokenAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'; // Native token address
const toTokenAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';

const userWalletAddress = '0x...35'; // User wallet address
export const secretKey = 'C353FBCDB0F893768DDD188743FCD6CF'; // The key obtained from the previous application
export const apiKey = '66bef7e6-2ace-423e-a3ad-9e9bfb2171a0'; // The api Key obtained from the previous application
export const passphrase = '213510Lcx+'; // The password created when applying for the key
const date = new Date(); // Get the current time
const timestamp = date.toISOString(); // Convert the current time to the desired format
const web3 = new Web3(new Web3.providers.HttpProvider(web3RpcUrl)); //Establishing web3 link

export const headersParams = (api: string) => ({
  'Content-Type': 'application/json',
  'OK-ACCESS-KEY': apiKey,
  'OK-ACCESS-SIGN': cryptoJS.enc.Base64.stringify(
    cryptoJS.HmacSHA256(timestamp + 'GET' + api, secretKey),
  ),
  'OK-ACCESS-TIMESTAMP': timestamp,
  'OK-ACCESS-PASSPHRASE': passphrase,
});

// Construct full API request URL
export const getRequestUrl = (api, queryParams) => {
  return apiBaseUrl + api + '?' + new URLSearchParams(queryParams).toString();
};
//   const apiRequestUrl = getRequestUrl(apiBaseUrl, '/swap', swapParams);

export async function fetchHttp(url, headers, body) {
  try {
    const response = await fetch(url, {
      headers: headers,
      method: 'GET',
    });
  } catch (error) {
    console.error('请求失败:', error);
  }
}
