import * as mongoose from 'mongoose';
export declare const UsersSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
export interface User extends mongoose.Document {
    key: string;
    userName: string;
    isAdmin: boolean;
    approved: boolean;
    password: string;
}
