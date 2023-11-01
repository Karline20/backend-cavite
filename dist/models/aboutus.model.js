"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUs = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AboutUs = exports.AboutUs = class AboutUs extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuidv4',
    }),
    tslib_1.__metadata("design:type", String)
], AboutUs.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], AboutUs.prototype, "description", void 0);
exports.AboutUs = AboutUs = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], AboutUs);
//# sourceMappingURL=aboutus.model.js.map