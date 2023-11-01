"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TermsController = exports.TermsController = class TermsController {
    constructor(termsRepository) {
        this.termsRepository = termsRepository;
    }
    async create(rating) {
        return this.termsRepository.create(rating);
    }
    async count(where) {
        return this.termsRepository.count(where);
    }
    async find(filter) {
        return this.termsRepository.find(filter);
    }
    async updateAll(rating, where) {
        return this.termsRepository.updateAll(rating, where);
    }
    async findById(id, filter) {
        return this.termsRepository.findById(id, filter);
    }
    async updateById(id, rating) {
        await this.termsRepository.updateById(id, rating);
    }
    async replaceById(id, rating) {
        await this.termsRepository.replaceById(id, rating);
    }
    async deleteById(id) {
        await this.termsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/terms'),
    (0, rest_1.response)(200, {
        description: 'Terms model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Terms) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Terms, {
                    title: 'NewTerms',
                    exclude: ['y'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TermsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/terms/count'),
    (0, rest_1.response)(200, {
        description: 'Terms model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Terms)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TermsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/terms'),
    (0, rest_1.response)(200, {
        description: 'Array of Terms model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Terms, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Terms)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TermsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/terms'),
    (0, rest_1.response)(200, {
        description: 'Terms PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Terms, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Terms)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Terms, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TermsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/terms/{id}'),
    (0, rest_1.response)(200, {
        description: 'Terms model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Terms, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Terms, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TermsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/terms/{id}'),
    (0, rest_1.response)(204, {
        description: 'Terms PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Terms, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Terms]),
    tslib_1.__metadata("design:returntype", Promise)
], TermsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/terms/{id}'),
    (0, rest_1.response)(204, {
        description: 'Terms PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Terms]),
    tslib_1.__metadata("design:returntype", Promise)
], TermsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/terms/{id}'),
    (0, rest_1.response)(204, {
        description: 'Terms DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TermsController.prototype, "deleteById", null);
exports.TermsController = TermsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TermsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TermsRepository])
], TermsController);
//# sourceMappingURL=terms.controller.js.map