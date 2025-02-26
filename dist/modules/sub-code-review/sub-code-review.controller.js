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
exports.SubCodeReviewController = void 0;
const common_1 = require("@nestjs/common");
const sub_code_review_service_1 = require("./sub-code-review.service");
const create_sub_code_review_dto_1 = require("./dto/create-sub-code-review.dto");
const guards_1 = require("../../auth/guards");
let SubCodeReviewController = class SubCodeReviewController {
    constructor(subCodeReviewService) {
        this.subCodeReviewService = subCodeReviewService;
    }
    async GetAllSubCodeReviews({ parentCodeReviewID }) {
        return this.subCodeReviewService.getSubCodeReviews({ parentCodeReviewID });
    }
    async updateSubCodeReview(codeReviewId, blocks, connections) {
        const subCodeReview = await this.subCodeReviewService.updateSubCodeReview({
            codeReviewId,
            blocks,
            connections,
        });
        if (subCodeReview) {
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'SubCodeReview updated successfully',
                subCodeReview: subCodeReview,
            };
        }
        else {
            return {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: '',
            };
        }
    }
    async addSubCodeReview(createSubCodeReviewDto) {
        return this.subCodeReviewService.insertSubCodeReview(createSubCodeReviewDto);
    }
    async removeSubCodeReview(parentCodeReviewID) {
        const isDeleted = await this.subCodeReviewService.deleteSubCodeReview(parentCodeReviewID);
        if (isDeleted) {
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'SubCodeReview deleted successfully',
            };
        }
        else {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: '',
            };
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubCodeReviewController.prototype, "GetAllSubCodeReviews", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.UserNameGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('blocks')),
    __param(2, (0, common_1.Body)('connections')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], SubCodeReviewController.prototype, "updateSubCodeReview", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sub_code_review_dto_1.CreateSubCodeReviewDto]),
    __metadata("design:returntype", Promise)
], SubCodeReviewController.prototype, "addSubCodeReview", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('parentCodeReviewID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubCodeReviewController.prototype, "removeSubCodeReview", null);
SubCodeReviewController = __decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.Controller)('api/sub-code-review'),
    __metadata("design:paramtypes", [sub_code_review_service_1.SubCodeReviewService])
], SubCodeReviewController);
exports.SubCodeReviewController = SubCodeReviewController;
//# sourceMappingURL=sub-code-review.controller.js.map