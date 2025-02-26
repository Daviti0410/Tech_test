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
exports.MeetingsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MeetingsService = class MeetingsService {
    constructor(meetingModel, subCodeReviewModel) {
        this.meetingModel = meetingModel;
        this.subCodeReviewModel = subCodeReviewModel;
    }
    async insertMeeting(meetingDto) {
        const newMeeting = new this.meetingModel(meetingDto);
        newMeeting.key = newMeeting.id;
        return newMeeting.save();
    }
    async getMeetings({ search, tags, startDate, endDate, }) {
        return this.findMeetingsWithQueries(search, tags, startDate, endDate);
    }
    async getMeetingWithOffset(limit, offset) {
        return this.applyOffsetToMeetings(limit, offset);
    }
    async getSingleMeeting(meetingId) {
        const meeting = await this.findMeeting(meetingId);
        return {
            id: meeting.id,
            title: meeting.title,
            notes: meeting.notes,
            video: meeting.video,
            links: meeting.links,
            startDate: meeting.startDate,
            codeReviews: meeting.codeReviews,
            tags: meeting.tags,
            comments: meeting.comments,
        };
    }
    async updateMeeting(meetingId, title, notes, video, links, startDate, codeReviews, tags, comments) {
        var _a;
        const updatedMeeting = await this.findMeeting(meetingId);
        let codeReviewsDifference = [];
        if (title) {
            updatedMeeting.title = title;
        }
        if (notes) {
            updatedMeeting.notes = notes;
        }
        if (video) {
            updatedMeeting.video = video;
        }
        if (links) {
            updatedMeeting.links = links;
        }
        if (startDate) {
            updatedMeeting.startDate = startDate;
        }
        if (codeReviews) {
            const updatedMeetingObject = (_a = updatedMeeting.toObject()) === null || _a === void 0 ? void 0 : _a.codeReviews;
            codeReviewsDifference = updatedMeetingObject.filter((codeReview) => {
                return !codeReviews.find((elem) => elem.id === codeReview.id);
            });
            updatedMeeting.codeReviews = codeReviews;
        }
        if (tags) {
            updatedMeeting.tags = tags;
        }
        if (comments) {
            updatedMeeting.comments = comments;
        }
        await updatedMeeting.save();
        if (codeReviewsDifference.length) {
            codeReviewsDifference.forEach((codeReview) => {
                this.subCodeReviewModel
                    .deleteMany({ parentCodeReviewID: codeReview.id })
                    .exec();
            });
        }
        return updatedMeeting;
    }
    async deleteMeeting(meetingId) {
        const result = await this.meetingModel.deleteOne({ _id: meetingId }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Could not find meeting.');
        }
        await this.subCodeReviewModel
            .deleteMany({ parentCardID: meetingId })
            .exec();
        return true;
    }
    async applyOffsetToMeetings(limit, offset) {
        const limitNum = parseInt(limit);
        const offsetNum = parseInt(offset);
        const data = await this.meetingModel
            .find({})
            .skip(offsetNum)
            .limit(limitNum);
        return {
            data,
        };
    }
    async findMeetingsWithQueries(title, tags, startDate, endDate) {
        const searchRegExp = new RegExp(title, 'gi');
        const filters = {
            title: {
                $regex: searchRegExp,
            },
        };
        if (tags) {
            filters['tags'] = { $in: tags };
        }
        if (startDate || endDate) {
            const dateQuery = {};
            if (startDate) {
                dateQuery['$gte'] = startDate;
            }
            if (endDate) {
                dateQuery['$lte'] = endDate;
            }
            filters['startDate'] = dateQuery;
        }
        const data = await this.meetingModel
            .find(filters)
            .sort({ startDate: -1, _id: 1 });
        return {
            data,
        };
    }
    async findMeeting(id) {
        let meeting;
        try {
            meeting = await this.meetingModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find meeting.');
        }
        if (!meeting) {
            throw new common_1.NotFoundException('Could not find meeting.');
        }
        return meeting;
    }
};
MeetingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Meeting')),
    __param(1, (0, mongoose_1.InjectModel)('SubCodeReview')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], MeetingsService);
exports.MeetingsService = MeetingsService;
//# sourceMappingURL=meetings.service.js.map