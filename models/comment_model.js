import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    body: { type: String, required: true },
    createdAt: { type: Date },
});

export const commentModel = model('comment',commentSchema);

