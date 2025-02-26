"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSchema = void 0;
const mongoose = require("mongoose");
exports.CommentsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    author: { type: String, required: true },
    dateOfCreation: { type: String, required: true },
    text: { type: String, required: false }
});
//# sourceMappingURL=comments.schema.js.map