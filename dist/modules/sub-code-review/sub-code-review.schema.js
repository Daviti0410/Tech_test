"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCodeReviewSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SubCodeReviewSchema = new mongoose_1.default.Schema({
    blocks: {
        type: {
            codeA: {
                type: {
                    code: String,
                    comments: {
                        type: [
                            {
                                lineRange: { type: Array, required: false },
                                content: { type: String, required: false },
                            },
                        ],
                        required: false,
                    },
                    selectedRows: { type: Array, required: false },
                },
                required: false,
            },
            codeB: {
                type: {
                    code: String,
                    comments: {
                        type: [
                            {
                                lineRange: { type: Array, required: false },
                                content: { type: String, required: false },
                            },
                        ],
                        required: false,
                    },
                    selectedRows: { type: Array, required: false },
                },
                required: false,
            },
        },
    },
    connections: { type: Array, required: false },
    title: String,
    id: String,
    userName: String,
    parentCodeReviewID: String,
    parentCardID: String,
}, {
    minimize: false,
});
//# sourceMappingURL=sub-code-review.schema.js.map