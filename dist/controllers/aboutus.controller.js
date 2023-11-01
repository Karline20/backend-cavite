"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AboutUsController = exports.AboutUsController = class AboutUsController {
    constructor(aboutusRepository) {
        this.aboutusRepository = aboutusRepository;
    }
    async create(rating) {
        return this.aboutusRepository.create(rating);
    }
    async findById(id, filter) {
        return this.aboutusRepository.findById(id, filter);
    }
    async updateById(id, rating) {
        await this.aboutusRepository.updateById(id, rating);
    }
    async deleteById(id) {
        await this.aboutusRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/aboutus'),
    (0, rest_1.response)(200, {
        description: 'AboutUs model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.AboutUs) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AboutUs, {
                    title: 'NewAboutUs',
                    exclude: ['y'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AboutUsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/aboutus/{id}'),
    (0, rest_1.response)(200, {
        description: 'AboutUs model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AboutUs, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AboutUs, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AboutUsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/aboutus/{id}'),
    (0, rest_1.response)(204, {
        description: 'AboutUs PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AboutUs, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AboutUs]),
    tslib_1.__metadata("design:returntype", Promise)
], AboutUsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/aboutus/{id}'),
    (0, rest_1.response)(204, {
        description: 'AboutUs DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AboutUsController.prototype, "deleteById", null);
exports.AboutUsController = AboutUsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AboutUsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AboutUsRepository])
], AboutUsController);
//# sourceMappingURL=aboutus.controller.js.map