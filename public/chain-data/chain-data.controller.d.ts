import { ChainDataService } from './chain-data.service';
import { CreateChainDatumDto } from './dto/create-chain-datum.dto';
export declare class ChainDataController {
    private readonly chainDataService;
    constructor(chainDataService: ChainDataService);
    create(createChainDatumDto: CreateChainDatumDto): string;
    getHistoricalPrice(params: {
        chainIndex: string;
        period: string;
    }): Promise<any>;
    getSupportedChainData(): Promise<any>;
    getCurrenciesPrice(params: any): Promise<any>;
    getRealTimePrice(queryParams: any): Promise<any>;
}
