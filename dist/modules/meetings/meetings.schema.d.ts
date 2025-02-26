import { Comment } from '../comments/comments.schema';
import * as mongoose from 'mongoose';
import { RawDraftContentState } from 'draft-js';
export declare const MeetingSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
export interface Meeting extends mongoose.Document {
    key: string;
    title: string;
    notes: RawDraftContentState;
    video: Array<{
        id: number;
        src: string;
    }>;
    links: Array<string>;
    startDate: string;
    codeReviews: Array<CodeReview>;
    tags: Array<string>;
    comments: Array<Comment>;
}
export interface MeetingsData {
    data: Meeting[];
}
export interface PaginationInterface {
    offset?: string;
    limit?: string;
    search?: string;
    tags?: string[];
    startDate?: string;
    endDate?: string;
}
export interface CodeReview {
    id: string;
    blocks: {
        codeA: {
            comments: {
                lineRange: number[];
                content: string;
            }[];
            selectedRows: number[];
        };
        codeB: {
            code: string;
            comments: {
                lineRange: number[];
                content: string;
            };
            selectedRows: number[];
        };
    };
    connections: any[];
    title: string;
}
