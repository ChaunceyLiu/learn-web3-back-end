import { CreateChainDatumDto } from './dto/create-chain-datum.dto';
import { UpdateChainDatumDto } from './dto/update-chain-datum.dto';
export declare class ChainDataService {
    create(createChainDatumDto: CreateChainDatumDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChainDatumDto: UpdateChainDatumDto): string;
    remove(id: number): string;
    getSupportedChainData(): Promise<any>;
    getCurrenciesPrice(params: any): Promise<any>;
    getHistoricalPrice(params: any): Promise<any>;
    getRealTimePrice(params: any): Promise<any>;
}
