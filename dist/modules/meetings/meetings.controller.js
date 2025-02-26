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
exports.MeetingsController = void 0;
const common_1 = require("@nestjs/common");
const meetings_service_1 = require("./meetings.service");
const create_meeting_dto_1 = require("./dto/create-meeting.dto");
const guards_1 = require("../../auth/guards");
let MeetingsController = class MeetingsController {
    constructor(meetingsService) {
        this.meetingsService = meetingsService;
    }
    async addMeeting(createMeetingDto) {
        return this.meetingsService.insertMeeting(createMeetingDto);
    }
    async getAllMeetings({ search, tags, startDate, endDate }) {
        return this.meetingsService.getMeetings({
            search,
            tags,
            startDate,
            endDate,
        });
    }
    async getMeetingWithPagination({ limit, offset }) {
        return this.meetingsService.getMeetingWithOffset(limit, offset);
    }
    getMeeting(meetingId) {
        return this.meetingsService.getSingleMeeting(meetingId);
    }
    async updateMeeting(meetingId, meetingTitle, meetingNotes, meetingVideo, meetingLinks, meetingDate, meetingCodeReviews, meetingTags, meetingComments) {
        const meeting = await this.meetingsService.updateMeeting(meetingId, meetingTitle, meetingNotes, meetingVideo, meetingLinks, meetingDate, meetingCodeReviews, meetingTags, meetingComments);
        if (meeting) {
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Meeting updated successfully',
                meeting: meeting,
            };
        }
        else {
            return {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: '',
            };
        }
    }
    async removeMeeting(meetingId) {
        const isDeleted = await this.meetingsService.deleteMeeting(meetingId);
        if (isDeleted) {
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Meeting deleted successfully',
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
    (0, common_1.UseGuards)(guards_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_meeting_dto_1.CreateMeetingDto]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "addMeeting", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "getAllMeetings", null);
__decorate([
    (0, common_1.Get)('/pages'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "getMeetingWithPagination", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeetingsController.prototype, "getMeeting", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.RolesGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('notes')),
    __param(3, (0, common_1.Body)('video')),
    __param(4, (0, common_1.Body)('links')),
    __param(5, (0, common_1.Body)('startDate')),
    __param(6, (0, common_1.Body)('codeReviews')),
    __param(7, (0, common_1.Body)('tags')),
    __param(8, (0, common_1.Body)('comments')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Array,
        Array, String, Array,
        Array,
        Array]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "updateMeeting", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "removeMeeting", null);
MeetingsController = __decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.Controller)('api/meetings'),
    __metadata("design:paramtypes", [meetings_service_1.MeetingsService])
], MeetingsController);
exports.MeetingsController = MeetingsController;
//# sourceMappingURL=meetings.controller.js.map