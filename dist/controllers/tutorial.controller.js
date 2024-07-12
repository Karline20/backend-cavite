"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TutorialController = exports.TutorialController = class TutorialController {
    constructor(tutorialRepository) {
        this.tutorialRepository = tutorialRepository;
    }
    async create(tutorial) {
        return this.tutorialRepository.create(tutorial);
    }
    async updateById(id, tutorial) {
        await this.tutorialRepository.updateById(id, tutorial);
    }
    async replaceById(id, tutorial) {
        await this.tutorialRepository.updateById(id, tutorial);
    }
    async find(filter) {
        filter = filter !== null && filter !== void 0 ? filter : {};
        filter.order = ['tutorial ASC'];
        return this.tutorialRepository.find(filter);
    }
    async searchTutorial(searchQuery) {
        const filter = {
            where: {
                tutorial: { ilike: `%${searchQuery}%` }
            },
        };
        return this.tutorialRepository.find(filter);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/tutorial'),
    (0, rest_1.response)(200, {
        description: 'Rating model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Tutorial) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tutorial, {
                    title: 'NewRating',
                    exclude: ['y'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TutorialController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tutorial/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tutorial PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tutorial, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tutorial]),
    tslib_1.__metadata("design:returntype", Promise)
], TutorialController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/tutorial/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tutorial PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tutorial, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tutorial]),
    tslib_1.__metadata("design:returntype", Promise)
], TutorialController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tutorial'),
    (0, rest_1.response)(200, {
        description: 'Array of Tutorial model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Tutorial, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Tutorial)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TutorialController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tutorial/search'),
    (0, rest_1.response)(200, {
        description: 'Array of Tutorial model instances matching the search criteria',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Tutorial, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('q')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TutorialController.prototype, "searchTutorial", null);
exports.TutorialController = TutorialController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TutorialRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TutorialRepository])
], TutorialController);
//# sourceMappingURL=tutorial.controller.js.map