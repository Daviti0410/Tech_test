import { Model } from 'mongoose';
import { SubCodeReviewsQuery, SubCodeReview, SubCodeReviewData } from './sub-code-review.schema';
import { CreateSubCodeReviewDto } from './dto/create-sub-code-review.dto';
export declare class SubCodeReviewService {
    private readonly subCodeReviewModel;
    constructor(subCodeReviewModel: Model<SubCodeReview>);
    updateSubCodeReview({ codeReviewId, blocks, connections }: {
        codeReviewId: any;
        blocks: any;
        connections: any;
    }): Promise<any>;
    getSubCodeReviews({ parentCodeReviewID, }: SubCodeReviewsQuery): Promise<SubCodeReviewData>;
    insertSubCodeReview(createSubCodeReviewDto: CreateSubCodeReviewDto): Promise<SubCodeReview & {
        _id: any;
    }>;
    private findSubCodeReviewByID;
    private findSubCodeReviewWithQueries;
    deleteSubCodeReview(parentCodeReviewID: string): Promise<boolean>;
}
