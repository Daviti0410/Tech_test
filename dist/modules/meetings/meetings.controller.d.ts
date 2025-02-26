import { HttpStatus } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { CodeReview, Meeting, MeetingsData, PaginationInterface } from './meetings.schema';
import { Comment } from '../comments/comments.schema';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { RawDraftContentState } from 'draft-js';
export declare class MeetingsController {
    private readonly meetingsService;
    constructor(meetingsService: MeetingsService);
    addMeeting(createMeetingDto: CreateMeetingDto): Promise<Meeting>;
    getAllMeetings({ search, tags, startDate, endDate }: PaginationInterface): Promise<MeetingsData>;
    getMeetingWithPagination({ limit, offset }: PaginationInterface): Promise<MeetingsData>;
    getMeeting(meetingId: string): Promise<{
        id: any;
        title: string;
        notes: RawDraftContentState;
        video: {
            id: number;
            src: string;
        }[];
        links: string[];
        startDate: string;
        codeReviews: CodeReview[];
        tags: string[];
        comments: Comment[];
    }>;
    updateMeeting(meetingId: string, meetingTitle: string, meetingNotes: RawDraftContentState, meetingVideo: Array<{
        id: number;
        src: string;
    }>, meetingLinks: Array<string>, meetingDate: string, meetingCodeReviews: Array<CodeReview>, meetingTags: Array<string>, meetingComments: Array<Comment>): Promise<{
        statusCode: HttpStatus;
        message: string;
        meeting: Meeting;
    } | {
        statusCode: HttpStatus;
        message: string;
        meeting?: undefined;
    }>;
    removeMeeting(meetingId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
