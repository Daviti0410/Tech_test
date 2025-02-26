import { Model } from 'mongoose';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { Comment } from '../comments/comments.schema';
import { Meeting, CodeReview, MeetingsData, PaginationInterface } from './meetings.schema';
import { SubCodeReview } from '../sub-code-review/sub-code-review.schema';
import { RawDraftContentState } from 'draft-js';
export declare class MeetingsService {
    private readonly meetingModel;
    private readonly subCodeReviewModel;
    constructor(meetingModel: Model<Meeting>, subCodeReviewModel: Model<SubCodeReview>);
    insertMeeting(meetingDto: CreateMeetingDto): Promise<Meeting>;
    getMeetings({ search, tags, startDate, endDate, }: PaginationInterface): Promise<MeetingsData>;
    getMeetingWithOffset(limit: string, offset: string): Promise<MeetingsData>;
    getSingleMeeting(meetingId: string): Promise<{
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
    updateMeeting(meetingId: string, title: string, notes: RawDraftContentState, video: Array<{
        id: number;
        src: string;
    }>, links: Array<string>, startDate: string, codeReviews: Array<CodeReview>, tags: Array<string>, comments: Array<Comment>): Promise<Meeting>;
    deleteMeeting(meetingId: string): Promise<boolean>;
    private applyOffsetToMeetings;
    private findMeetingsWithQueries;
    private findMeeting;
}
