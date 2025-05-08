import { CreateWalletDatumDto } from './dto/create-wallet-datum.dto';
import { UpdateWalletDatumDto } from './dto/update-wallet-datum.dto';
export declare class WalletDataService {
    create(createWalletDatumDto: CreateWalletDatumDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWalletDatumDto: UpdateWalletDatumDto): string;
    remove(id: number): string;
    getRpcSepolia(params: any): Promise<any>;
}
