"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RatingController = exports.RatingController = class RatingController {
    constructor(ratingRepository) {
        this.ratingRepository = ratingRepository;
    }
    async create(rating) {
        return this.ratingRepository.create(rating);
    }
    async count(where) {
        return this.ratingRepository.count(where);
    }
    async calculateSum(eventid) {
        var _a;
        const filter = {
            where: { eventid: eventid }, // Filter by the provided eventid
        };
        const ratings = await this.ratingRepository.find(filter);
        // Calculate the total value (sum) of ratings for the specified eventid
        let totalValue = 0;
        for (const rating of ratings) {
            const ratingValue = (_a = rating.rate) !== null && _a !== void 0 ? _a : 0;
            totalValue += ratingValue;
        }
        // Calculate the average rating
        const count = ratings.length;
        const averageRating = count === 0 ? 0 : totalValue / count;
        return { totalValue, averageRating };
    }
    async find(filter) {
        return this.ratingRepository.find(filter);
    }
    async updateAll(rating, where) {
        return this.ratingRepository.updateAll(rating, where);
    }
    async findById(id, filter) {
        return this.ratingRepository.findById(id, filter);
    }
    async updateById(id, rating) {
        await this.ratingRepository.updateById(id, rating);
    }
    async replaceById(id, rating) {
        await this.ratingRepository.replaceById(id, rating);
    }
    async deleteById(id) {
        await this.ratingRepository.deleteById(id);
    }
    async findByEventId(eventid) {
        // Define a filter to find ratings by event ID
        const filter = {
            where: {
                eventid: eventid,
            },
        };
        // Retrieve the ratings based on the filter
        return this.ratingRepository.find(filter);
    }
    async checkExistence(data) {
        const { userid, eventid } = data;
        const existingRating = await this.ratingRepository.findOne({
            where: { userid, eventid },
        });
        if (existingRating) {
            return 'existing';
        }
        else {
            return 'not existing';
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/ratings'),
    (0, rest_1.response)(200, {
        description: 'Rating model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rating) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rating, {
                    title: 'NewRating',
                    exclude: ['y'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ratings/count'),
    (0, rest_1.response)(200, {
        description: 'Rating model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Rating)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ratings/sum'),
    (0, rest_1.response)(200, {
        description: 'Rating model sum and average for a specific eventid',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        totalValue: { type: 'number' },
                        averageRating: { type: 'number' },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('eventid')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "calculateSum", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ratings'),
    (0, rest_1.response)(200, {
        description: 'Array of Rating model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Rating, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Rating)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ratings'),
    (0, rest_1.response)(200, {
        description: 'Rating PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rating, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Rating)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Rating, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ratings/{id}'),
    (0, rest_1.response)(200, {
        description: 'Rating model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rating, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Rating, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ratings/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rating PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rating, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rating]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/ratings/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rating PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rating]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ratings/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rating DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ratingsByEvent/{eventid}'),
    (0, rest_1.response)(200, {
        description: 'Array of Rating model instances by event ID',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Rating, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('eventid')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingController.prototype, "findByEventId", null);
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
], RatingController.prototype, "checkExistence", null);
exports.RatingController = RatingController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RatingRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RatingRepository])
], RatingController);
//# sourceMappingURL=rating.controller.js.map