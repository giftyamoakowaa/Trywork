import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'draft', enum: ['draft', 'published'] }, 
    createdAt: { type: Date, default: Date.now }, // Adding createdAt timestamp
    updatedAt: { type: Date, default: Date.now },  
});

export const blogModel = model('comment',blogSchema);

