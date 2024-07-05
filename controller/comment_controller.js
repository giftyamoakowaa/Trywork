import { commentModel } from "../models/comment_model.js";


export const getcomment = async (req, res) => {
    try {
        console.log('request', req.body)
        const comment = await commentModel.send(req.body)
        res.status(200).send(getcomment);

    } catch (error) {
        console.log(error)

    }
};

export const postcomment = async (req, res) => {
    try {
        console.log('request', req)
        const postcomment = await commentModel.create(req.body)
        res.status(200).json(postcomment);
    } catch (error) {
        console.log(error)
    }
};

