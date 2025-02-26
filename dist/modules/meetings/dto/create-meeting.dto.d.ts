import { RawDraftContentState } from 'draft-js';
import { CodeReview } from '../meetings.schema';
export declare class CreateMeetingDto {
    title: string;
    notes: RawDraftContentState;
    video: Array<{
        id: number;
        src: string;
    }>;
    links: Array<string>;
    startDate: string;
    codeReviews: Array<CodeReview>;
}
