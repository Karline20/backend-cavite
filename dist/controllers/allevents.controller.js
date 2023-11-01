"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlleventsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AlleventsController = exports.AlleventsController = class AlleventsController {
    constructor(alleventsRepository) {
        this.alleventsRepository = alleventsRepository;
    }
    async create(allevents) {
        return this.alleventsRepository.create(allevents);
    }
    async count(where) {
        return this.alleventsRepository.count(where);
    }
    async find(filter) {
        return this.alleventsRepository.find(filter);
    }
    async updateAll(allevents, where) {
        return this.alleventsRepository.updateAll(allevents, where);
    }
    async findById(id, filter) {
        return this.alleventsRepository.findById(id, filter);
    }
    async updateById(id, allevents) {
        await this.alleventsRepository.updateById(id, allevents);
    }
    async replaceById(id, allevents) {
        await this.alleventsRepository.replaceById(id, allevents);
    }
    async deleteById(id) {
        await this.alleventsRepository.deleteById(id);
    }
    async findByEventId(eventcategory) {
        // Define a filter to find ratings by event ID
        const filter = {
            where: {
                eventcategory: eventcategory,
            },
        };
        // Retrieve the ratings based on the filter
        return this.alleventsRepository.find(filter);
    }
    async countByCategory(eventcategory) {
        const where = {
            eventcategory: eventcategory,
        };
        return this.alleventsRepository.count(where);
    }
    async searchEvents(searchQuery, eventcategory) {
        const filter = {
            where: {
                and: [
                    {
                        or: [
                            { name: { ilike: `%${searchQuery}%` } },
                            { description: { ilike: `%${searchQuery}%` } },
                            { location: { ilike: `%${searchQuery}%` } },
                        ],
                    },
                    { eventcategory: { ilike: `%${eventcategory}%` } },
                ],
            },
        };
        return this.alleventsRepository.find(filter);
    }
    async findByEventIdCate(category) {
        // Define a filter to find ratings by event ID
        const filter = {
            where: {
                category: category,
            },
        };
        // Retrieve the ratings based on the filter
        return this.alleventsRepository.find(filter);
    }
    async searchEventsCategory(searchQuery, eventcategory, category) {
        const filter = {
            where: {
                and: [
                    {
                        or: [
                            { name: { ilike: `%${searchQuery}%` } },
                            { description: { ilike: `%${searchQuery}%` } },
                            { location: { ilike: `%${searchQuery}%` } },
                        ],
                    },
                    { eventcategory: { ilike: `%${eventcategory}%` } },
                    { category: { ilike: `%${category}%` } },
                ],
            },
        };
        return this.alleventsRepository.find(filter);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/allevents'),
    (0, rest_1.response)(200, {
        description: 'Allevents model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Allevents) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Allevents, {
                    title: 'NewAllevents',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/allevents/count'),
    (0, rest_1.response)(200, {
        description: 'Allevents model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Allevents)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/allevents'),
    (0, rest_1.response)(200, {
        description: 'Array of Allevents model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Allevents, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Allevents)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/allevents'),
    (0, rest_1.response)(200, {
        description: 'Allevents PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Allevents, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Allevents)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Allevents, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/allevents/{id}'),
    (0, rest_1.response)(200, {
        description: 'Allevents model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Allevents, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Allevents, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/allevents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Allevents PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Allevents, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Allevents]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/allevents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Allevents PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Allevents]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/allevents/{id}'),
    (0, rest_1.response)(204, {
        description: 'Allevents DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alleventsByCategory/{eventcategory}'),
    (0, rest_1.response)(200, {
        description: 'Array of all events model instances by event ID',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Allevents, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('eventcategory')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "findByEventId", null);
tslib_1.__decorate([
    (0, rest_1.get)('/allevents/countByCategory/{eventcategory}'),
    (0, rest_1.response)(200, {
        description: 'Count of Allevents by eventcategory',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.path.string('eventcategory')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "countByCategory", null);
tslib_1.__decorate([
    (0, rest_1.get)('/allevents/search'),
    (0, rest_1.response)(200, {
        description: 'Array of Allevents model instances matching the search criteria',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Allevents, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('q')),
    tslib_1.__param(1, rest_1.param.query.string('eventcategory')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "searchEvents", null);
tslib_1.__decorate([
    (0, rest_1.get)('/alleventsByCategoryToo/{category}'),
    (0, rest_1.response)(200, {
        description: 'Array of all events model instances by event ID',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Allevents, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('category')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "findByEventIdCate", null);
tslib_1.__decorate([
    (0, rest_1.get)('/allevents/search/category'),
    (0, rest_1.response)(200, {
        description: 'Array of Allevents model instances matching the search criteria',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Allevents, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('q')),
    tslib_1.__param(1, rest_1.param.query.string('eventcategory')),
    tslib_1.__param(2, rest_1.param.query.string('category')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AlleventsController.prototype, "searchEventsCategory", null);
exports.AlleventsController = AlleventsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AlleventsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AlleventsRepository])
], AlleventsController);
// @get('/allevents/search')
// @response(200, {
//   description: 'Array of Allevents model instances matching the search criteria',
//   content: {
//     'application/json': {
//       schema: {
//         type: 'array',
//         items: getModelSchemaRef(Allevents, { includeRelations: true }),
//       },
//     },
//   },
// })
// async searchEvents(
//   @param.query.string('q') searchQuery: string,
// ): Promise<Allevents[]> {
//   // Define a filter to search for events based on the searchQuery and eventCategory
//   const filter: Filter<Allevents> = {
//     where: {
//       and: [
//         {
//           or: [
//             { eventname: { ilike: `%${searchQuery}%` } },
//             { description: { ilike: `%${searchQuery}%` } },
//             { eventcategory: { ilike: `%${searchQuery}%` } },
//             { location: { ilike: `%${searchQuery}%` } },
//           ],
//         },
//       ],
//     },
//   };
//   return this.alleventsRepository.find(filter);
// }
//# sourceMappingURL=allevents.controller.js.map