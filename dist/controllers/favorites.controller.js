"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FavoritesController = exports.FavoritesController = class FavoritesController {
    constructor(favoritesRepository) {
        this.favoritesRepository = favoritesRepository;
    }
    async create(rating) {
        return this.favoritesRepository.create(rating);
    }
    async count(where) {
        return this.favoritesRepository.count(where);
    }
    async find(filter) {
        return this.favoritesRepository.find(filter);
    }
    async updateAll(rating, where) {
        return this.favoritesRepository.updateAll(rating, where);
    }
    async findById(id, filter) {
        return this.favoritesRepository.findById(id, filter);
    }
    async updateById(id, rating) {
        await this.favoritesRepository.updateById(id, rating);
    }
    async replaceById(id, rating) {
        await this.favoritesRepository.replaceById(id, rating);
    }
    async deleteById(id) {
        await this.favoritesRepository.deleteById(id);
    }
    async findByUserId(userid) {
        // Define a filter to find favorites by user ID
        const filter = {
            where: {
                userid: userid,
            },
        };
        // Retrieve the favorites based on the filter
        return this.favoritesRepository.find(filter);
    }
    async checkExistence(data) {
        const { userid, eventid } = data;
        const existingFavorites = await this.favoritesRepository.findOne({
            where: { userid, eventid },
        });
        return !!existingFavorites;
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/favorites'),
    (0, rest_1.response)(200, {
        description: 'Favorites model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Favorites) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Favorites, {
                    title: 'NewFavorites',
                    exclude: ['y'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/favorites/count'),
    (0, rest_1.response)(200, {
        description: 'Favorites model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Favorites)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/favorites'),
    (0, rest_1.response)(200, {
        description: 'Array of Favorites model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Favorites, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Favorites)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/favorites'),
    (0, rest_1.response)(200, {
        description: 'Favorites PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Favorites, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Favorites)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Favorites, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/favorites/{id}'),
    (0, rest_1.response)(200, {
        description: 'Favorites model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Favorites, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Favorites, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/favorites/{id}'),
    (0, rest_1.response)(204, {
        description: 'Favorites PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Favorites, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Favorites]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/favorites/{id}'),
    (0, rest_1.response)(204, {
        description: 'Favorites PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Favorites]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/favorites/{id}'),
    (0, rest_1.response)(204, {
        description: 'Favorites DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/favoritesByUser/{userid}'),
    (0, rest_1.response)(200, {
        description: 'Array of Favorites model instances by user ID',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Favorites, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('userid')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "findByUserId", null);
tslib_1.__decorate([
    (0, rest_1.post)('/check-existence'),
    (0, rest_1.response)(200, {
        description: 'Check if userid and eventid exist',
        content: { 'application/json': { schema: { type: 'string' } } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        userid: { type: 'string' },
                        eventid: { type: 'string' },
                    },
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FavoritesController.prototype, "checkExistence", null);
exports.FavoritesController = FavoritesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FavoritesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FavoritesRepository])
], FavoritesController);
//# sourceMappingURL=favorites.controller.js.map