"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCodeReviewService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SubCodeReviewService = class SubCodeReviewService {
    constructor(subCodeReviewModel) {
        this.subCodeReviewModel = subCodeReviewModel;
    }
    async updateSubCodeReview({ codeReviewId, blocks, connections }) {
        const updatedSubCodeReview = await this.findSubCodeReviewByID(codeReviewId);
        if (blocks) {
            updatedSubCodeReview.blocks = blocks;
        }
        if (connections) {
            updatedSubCodeReview.connections = connections;
        }
        await updatedSubCodeReview.save();
        return updatedSubCodeReview;
    }
    async getSubCodeReviews({ parentCodeReviewID, }) {
        return this.findSubCodeReviewWithQueries({ parentCodeReviewID });
    }
    async insertSubCodeReview(createSubCodeReviewDto) {
        const newSubCodeReview = new this.subCodeReviewModel(createSubCodeReviewDto);
        return newSubCodeReview.save();
    }
    async findSubCodeReviewByID(id) {
        let subCodeReview;
        try {
            subCodeReview = await this.subCodeReviewModel.findOne({ id }).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find SubCodeReview.');
        }
        if (!subCodeReview) {
            throw new common_1.NotFoundException('Could not find SubCodeReview.');
        }
        return subCodeReview;
    }
    async findSubCodeReviewWithQueries({ parentCodeReviewID, }) {
        const filters = { parentCodeReviewID };
        const data = await this.subCodeReviewModel.find(filters);
        return { data };
    }
    async deleteSubCodeReview(parentCodeReviewID) {
        const result = await this.subCodeReviewModel
            .deleteOne({ parentCodeReviewID: parentCodeReviewID })
            .exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Could not find SubCodeReview.');
        }
        return true;
    }
};
SubCodeReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('SubCodeReview')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubCodeReviewService);
exports.SubCodeReviewService = SubCodeReviewService;
//# sourceMappingURL=sub-code-review.service.js.map