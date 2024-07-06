import { blogModel } from "../models/blog_model.js";


export const getblog = async (req, res) => {
    try {
        console.log('request', req);
        const blogs = await blogModel.find(); 
        res.status(200).json(blogs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error while fetching blogs' });
    }
};

export const postblog = async (req, res) => {
    try {
        console.log('request', req)
        const postblog = await blogModel.create(req.body)
        res.status(200).json(postblog);
    } catch (error) {
        console.log(error)
    }
};

