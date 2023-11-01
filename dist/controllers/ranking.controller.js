"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RankingController = exports.RankingController = class RankingController {
    constructor(rankingRepository) {
        this.rankingRepository = rankingRepository;
    }
    async create(rating) {
        return this.rankingRepository.create(rating);
    }
    async count(where) {
        return this.rankingRepository.count(where);
    }
    async find(filter) {
        return this.rankingRepository.find(filter);
    }
    async updateById(id, rating) {
        await this.rankingRepository.updateById(id, rating);
    }
    async findByUserId(userid, filter) {
        const ranking = await this.rankingRepository.findOne({ where: { userid }, ...filter });
        if (ranking) {
            return ranking; // Return the ranking if found
        }
    }
    async checkExistence(userid) {
        const existingRanking = await this.rankingRepository.findOne({
            where: { userid },
        });
        return !!existingRanking;
    }
    async getRankingsByScore() {
        return this.rankingRepository.find({
            order: ['score DESC'],
            limit: 10,
        });
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/ranking'),
    (0, rest_1.response)(200, {
        description: 'Ranking model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Ranking) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ranking, {
                    title: 'NewRanking',
                    exclude: ['y'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RankingController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ranking/count'),
    (0, rest_1.response)(200, {
        description: 'Ranking model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Ranking)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RankingController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ranking'),
    (0, rest_1.response)(200, {
        description: 'Array of Ranking model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Ranking, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Ranking)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RankingController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ranking/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ranking PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ranking, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Ranking]),
    tslib_1.__metadata("design:returntype", Promise)
], RankingController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ranking/by-userid/{userid}'),
    (0, rest_1.response)(200, {
        description: 'Ranking model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ranking),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('userid')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Ranking)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RankingController.prototype, "findByUserId", null);
tslib_1.__decorate([
    (0, rest_1.get)('/check-existence/ranking/{userid}'),
    tslib_1.__param(0, rest_1.param.path.string('userid')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RankingController.prototype, "checkExistence", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ranking/sorted-by-score'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], RankingController.prototype, "getRankingsByScore", null);
exports.RankingController = RankingController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RankingRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RankingRepository])
], RankingController);
//# sourceMappingURL=ranking.controller.js.map