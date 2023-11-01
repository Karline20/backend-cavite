"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ranking = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Ranking = exports.Ranking = class Ranking extends repository_1.Entity {
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
], Ranking.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ranking.prototype, "userid", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ranking.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Ranking.prototype, "score", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ranking.prototype, "timestamp", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ranking.prototype, "date", void 0);
exports.Ranking = Ranking = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Ranking);
//# sourceMappingURL=ranking.model.js.map