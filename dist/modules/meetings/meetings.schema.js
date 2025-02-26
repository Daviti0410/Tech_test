"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingSchema = void 0;
const mongoose = require("mongoose");
exports.MeetingSchema = new mongoose.Schema({
    key: { type: String, required: false },
    title: { type: String, required: true },
    notes: { type: Object, required: false },
    video: {
        type: [
            {
                id: Number,
                src: { type: String, required: false },
            },
        ],
        required: false,
    },
    links: [{ type: String, required: false }],
    startDate: {
        type: String,
        required: false,
    },
    tags: [{ type: String, required: false }],
    comments: {
        type: [
            {
                id: String,
                author: { type: String, required: true },
                dateOfCreation: { type: String, required: true },
                text: { type: String, required: false },
            },
        ],
    },
    codeReviews: {
        type: [
            {
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
                    required: false,
                },
                connections: { type: Array, required: false },
                title: { type: String, required: false },
                id: String,
            },
        ],
    },
}, { minimize: false });
//# sourceMappingURL=meetings.schema.js.map