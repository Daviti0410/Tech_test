import * as mongoose from 'mongoose';
export declare const CommentsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
export interface Comment extends mongoose.Document {
    id: string;
    author: string;
    dateOfCreation: string;
    text: string;
}
