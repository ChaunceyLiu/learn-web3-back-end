"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChainDatumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chain_datum_dto_1 = require("./create-chain-datum.dto");
class UpdateChainDatumDto extends (0, mapped_types_1.PartialType)(create_chain_datum_dto_1.CreateChainDatumDto) {
}
exports.UpdateChainDatumDto = UpdateChainDatumDto;
//# sourceMappingURL=update-chain-datum.dto.js.map