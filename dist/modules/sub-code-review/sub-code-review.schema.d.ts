import mongoose from 'mongoose';
export declare const SubCodeReviewSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
export interface SubCodeReview extends mongoose.Document {
    blocks: {
        codeA: {
            code: string;
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
            }[];
            selectedRows: number[];
        };
    };
    connections: any[];
    title: string;
    id: string;
    parentCodeReviewID: string;
    parentCardID: string;
    userName: string;
}
export interface SubCodeReviewsQuery {
    parentCodeReviewID: string;
}
export interface SubCodeReviewData {
    data: SubCodeReview[];
}
