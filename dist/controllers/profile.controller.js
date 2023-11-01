"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProfileController = exports.ProfileController = class ProfileController {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async create(profile) {
        return this.profileRepository.create(profile);
    }
    async find(filter) {
        return this.profileRepository.find(filter);
    }
    async findById(id, filter) {
        return this.profileRepository.findById(id, filter);
    }
    async updateById(id, profile) {
        await this.profileRepository.updateById(id, profile);
    }
    async replaceById(id, profile) {
        await this.profileRepository.replaceById(id, profile);
    }
    async deleteById(id) {
        await this.profileRepository.deleteById(id);
    }
    async findByUserId(userid, filter) {
        const profile = await this.profileRepository.findOne({ where: { userid }, ...filter });
        if (profile) {
            return profile; // Return the profile if found
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/profile'),
    (0, rest_1.response)(200, {
        description: 'Profile model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Profile) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Profile, {
                    title: 'NewProfile',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/profile'),
    (0, rest_1.response)(200, {
        description: 'Array of Profile model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Profile, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Profile)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/profile/{id}'),
    (0, rest_1.response)(200, {
        description: 'Profile model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Profile, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Profile, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/profile/{id}'),
    (0, rest_1.response)(204, {
        description: 'Profile PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Profile, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Profile]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/profile/{id}'),
    (0, rest_1.response)(204, {
        description: 'Profile PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Profile]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/profile/{id}'),
    (0, rest_1.response)(204, {
        description: 'Profile DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.get)('/profile/by-userid/{userid}'),
    (0, rest_1.response)(200, {
        description: 'Profile model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Profile),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('userid')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Profile)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "findByUserId", null);
exports.ProfileController = ProfileController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProfileRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProfileRepository])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map