"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terms = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Terms = exports.Terms = class Terms extends repository_1.Entity {
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
], Terms.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Terms.prototype, "ftitle", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Terms.prototype, "fdesc", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Terms.prototype, "stitle", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Terms.prototype, "sdesc", void 0);
exports.Terms = Terms = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Terms);
//# sourceMappingURL=terms.model.js.map