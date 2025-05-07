import { PartialType } from '@nestjs/mapped-types';
import { CreateChainDatumDto } from './create-chain-datum.dto';

export class UpdateChainDatumDto extends PartialType(CreateChainDatumDto) {}
