export declare const secretKey = "C353FBCDB0F893768DDD188743FCD6CF";
export declare const apiKey = "66bef7e6-2ace-423e-a3ad-9e9bfb2171a0";
export declare const passphrase = "213510Lcx+";
export declare const headersParams: (api: string) => {
    'Content-Type': string;
    'OK-ACCESS-KEY': string;
    'OK-ACCESS-SIGN': any;
    'OK-ACCESS-TIMESTAMP': string;
    'OK-ACCESS-PASSPHRASE': string;
};
export declare const getRequestUrl: (api: any, queryParams: any) => string;
export declare function fetchHttp(url: any, headers: any, body: any): Promise<void>;
