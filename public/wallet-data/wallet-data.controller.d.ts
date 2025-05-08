import { WalletDataService } from './wallet-data.service';
import { CreateWalletDatumDto } from './dto/create-wallet-datum.dto';
import { UpdateWalletDatumDto } from './dto/update-wallet-datum.dto';
export declare class WalletDataController {
    private readonly walletDataService;
    constructor(walletDataService: WalletDataService);
    create(createWalletDatumDto: CreateWalletDatumDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWalletDatumDto: UpdateWalletDatumDto): string;
    remove(id: string): string;
    getRpcSepolia(params: any): Promise<any>;
}
