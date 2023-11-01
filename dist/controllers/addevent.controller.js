"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddeventController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AddeventController = exports.AddeventController = class AddeventController {
    constructor(addeventRepository) {
        this.addeventRepository = addeventRepository;
    }
    async create(addevent) {
        return this.addeventRepository.create(addevent);
    }
    async count(where) {
        return this.addeventRepository.count(where);
    }
    async find(filter) {
        return this.addeventRepository.find(filter);
    }
    async updateAll(addevent, where) {
        return this.addeventRepository.updateAll(addevent, where);
    }
    async findById(id, filter) {
        return this.addeventRepository.findById(id, filter);
    }
    async updateById(id, addevent) {
        await this.addeventRepository.updateById(id, addevent);
    }
    async replaceById(id, addevent) {
        await this.addeventRepository.replaceById(id, addevent);
    }
    async deleteById(id) {
        await this.addeventRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/addevents'),
    (0, rest_1.response)(200, {
        description: 'Addevent model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Addevent) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Addevent, {
                    title: 'NewAddevent',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddeventController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/addevents/count'),
    (0, rest_1.response)(200, {
        description: 'Addevent model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Addevent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddeventController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/addevents'),
    (0, rest_1.response)(200, {
        description: 'Array of Addevent model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Addevent, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Addevent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddeventController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/addevents'),
    (0, rest_1.response)(200, {
        description: 'Addevent PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Addevent, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Addevent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Addevent, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddeventController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/addevents/{id}'),
    (0, rest_1.response)(200, {
        description: 'Addevent model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Addevent, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Addevent, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddeventController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/addevents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Addevent PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Addevent, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Addevent]),
    tslib_1.__metadata("design:returntype", Promise)
], AddeventController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/addevents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Addevent PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Addevent]),
    tslib_1.__metadata("design:returntype", Promise)
], AddeventController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/addevents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Addevent DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AddeventController.prototype, "deleteById", null);
exports.AddeventController = AddeventController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AddeventRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AddeventRepository])
], AddeventController);
//# sourceMappingURL=addevent.controller.js.map