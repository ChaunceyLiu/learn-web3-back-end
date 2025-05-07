import { PartialType } from '@nestjs/mapped-types';
import { CreateWalletDatumDto } from './create-wallet-datum.dto';

export class UpdateWalletDatumDto extends PartialType(CreateWalletDatumDto) {}
