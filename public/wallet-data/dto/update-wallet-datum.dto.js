"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWalletDatumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_wallet_datum_dto_1 = require("./create-wallet-datum.dto");
class UpdateWalletDatumDto extends (0, mapped_types_1.PartialType)(create_wallet_datum_dto_1.CreateWalletDatumDto) {
}
exports.UpdateWalletDatumDto = UpdateWalletDatumDto;
//# sourceMappingURL=update-wallet-datum.dto.js.map