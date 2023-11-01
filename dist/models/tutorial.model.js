"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tutorial = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Tutorial = exports.Tutorial = class Tutorial extends repository_1.Entity {
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
], Tutorial.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Tutorial.prototype, "tutorial", void 0);
exports.Tutorial = Tutorial = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Tutorial);
//# sourceMappingURL=tutorial.model.js.map