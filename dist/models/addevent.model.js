"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addevent = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Addevent = exports.Addevent = class Addevent extends repository_1.Entity {
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
], Addevent.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Addevent.prototype, "name", void 0);
exports.Addevent = Addevent = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Addevent);
//# sourceMappingURL=addevent.model.js.map