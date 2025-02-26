import { HttpStatus } from '@nestjs/common';
import { SubCodeReviewService } from './sub-code-review.service';
import { CreateSubCodeReviewDto } from './dto/create-sub-code-review.dto';
import { SubCodeReviewsQuery, SubCodeReview, SubCodeReviewData } from './sub-code-review.schema';
export declare class SubCodeReviewController {
    private readonly subCodeReviewService;
    constructor(subCodeReviewService: SubCodeReviewService);
    GetAllSubCodeReviews({ parentCodeReviewID }: SubCodeReviewsQuery): Promise<SubCodeReviewData>;
    updateSubCodeReview(codeReviewId: string, blocks: any, connections: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        subCodeReview: any;
    } | {
        statusCode: HttpStatus;
        message: string;
        subCodeReview?: undefined;
    }>;
    addSubCodeReview(createSubCodeReviewDto: CreateSubCodeReviewDto): Promise<SubCodeReview>;
    removeSubCodeReview(parentCodeReviewID: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
