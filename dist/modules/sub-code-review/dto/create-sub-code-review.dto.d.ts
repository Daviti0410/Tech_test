export declare class CreateSubCodeReviewDto {
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
