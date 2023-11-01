"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialStatusController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TutorialStatusController = exports.TutorialStatusController = class TutorialStatusController {
    constructor(tutorialStatusRepository) {
        this.tutorialStatusRepository = tutorialStatusRepository;
    }
    async create(rating) {
        return this.tutorialStatusRepository.create(rating);
    }
    async findByTutorialIdAndUserId(tutorialid, userid) {
        // Define a filter to find a single TutorialStatus instance by tutorial ID and user ID
        const filter = {
            where: {
                tutorialid: tutorialid,
                userid: userid,
            },
        };
        // Retrieve the TutorialStatus instance based on the filter
        const tutorialStatus = await this.tutorialStatusRepository.findOne(filter);
        return tutorialStatus !== null && tutorialStatus !== void 0 ? tutorialStatus : null;
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/tutorialStatus'),
    (0, rest_1.response)(200, {
        description: 'TutorialStatus model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.TutorialStatus) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TutorialStatus, {
                    title: 'NewRating',
                    exclude: ['y'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TutorialStatusController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tutorialByUserId/{tutorialid}/{userid}'),
    (0, rest_1.response)(200, {
        description: 'TutorialStatus model instance by tutorial ID and user ID',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TutorialStatus, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('tutorialid')),
    tslib_1.__param(1, rest_1.param.path.string('userid')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], TutorialStatusController.prototype, "findByTutorialIdAndUserId", null);
exports.TutorialStatusController = TutorialStatusController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TutorialStatusRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TutorialStatusRepository])
], TutorialStatusController);
//# sourceMappingURL=tutorialstatus.controller.js.map