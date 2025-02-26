"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
    key: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true },
    approved: { type: Boolean, required: true },
    password: { type: String, required: true },
});
//# sourceMappingURL=users.model.js.map