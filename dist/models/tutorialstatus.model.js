"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialStatus = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let TutorialStatus = exports.TutorialStatus = class TutorialStatus extends repository_1.Entity {
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
], TutorialStatus.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], TutorialStatus.prototype, "tutorialid", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], TutorialStatus.prototype, "userid", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], TutorialStatus.prototype, "tutorial", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: Boolean,
    }),
    tslib_1.__metadata("design:type", Boolean)
], TutorialStatus.prototype, "isFinish", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], TutorialStatus.prototype, "timestamp", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], TutorialStatus.prototype, "date", void 0);
exports.TutorialStatus = TutorialStatus = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], TutorialStatus);
//# sourceMappingURL=tutorialstatus.model.js.map