"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearcherController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ResearcherController = exports.ResearcherController = class ResearcherController {
    constructor(researcherRepository) {
        this.researcherRepository = researcherRepository;
    }
    async create(rating) {
        return this.researcherRepository.create(rating);
    }
    async count(where) {
        return this.researcherRepository.count(where);
    }
    async find(filter) {
        filter = filter !== null && filter !== void 0 ? filter : {};
        filter.order = ['name ASC'];
        return this.researcherRepository.find(filter);
    }
    async updateAll(rating, where) {
        return this.researcherRepository.updateAll(rating, where);
    }
    async findById(id, filter) {
        return this.researcherRepository.findById(id, filter);
    }
    async updateById(id, rating) {
        await this.researcherRepository.updateById(id, rating);
    }
    async replaceById(id, rating) {
        await this.researcherRepository.replaceById(id, rating);
    }
    async deleteById(id) {
        await this.researcherRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/researcher'),
    (0, rest_1.response)(200, {
        description: 'Researcher model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Researcher) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Researcher, {
                    title: 'NewResearcher',
                    exclude: ['y'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResearcherController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/researcher/count'),
    (0, rest_1.response)(200, {
        description: 'Researcher model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Researcher)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResearcherController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/researcher'),
    (0, rest_1.response)(200, {
        description: 'Array of Researcher model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Researcher, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Researcher)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResearcherController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/researcher'),
    (0, rest_1.response)(200, {
        description: 'Researcher PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Researcher, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Researcher)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Researcher, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResearcherController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/researcher/{id}'),
    (0, rest_1.response)(200, {
        description: 'Researcher model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Researcher, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Researcher, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResearcherController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/researcher/{id}'),
    (0, rest_1.response)(204, {
        description: 'Researcher PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Researcher, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Researcher]),
    tslib_1.__metadata("design:returntype", Promise)
], ResearcherController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/researcher/{id}'),
    (0, rest_1.response)(204, {
        description: 'Researcher PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Researcher]),
    tslib_1.__metadata("design:returntype", Promise)
], ResearcherController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/researcher/{id}'),
    (0, rest_1.response)(204, {
        description: 'Researcher DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ResearcherController.prototype, "deleteById", null);
exports.ResearcherController = ResearcherController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ResearcherRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ResearcherRepository])
], ResearcherController);
//# sourceMappingURL=researchers.controller.js.map