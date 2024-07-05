import { Router } from "express";
import { postcomment, getcomment } from "../controller/comment_controller.js";

export const commentRouter = Router();


commentRouter.post('/comment',postcomment);
commentRouter.get('/comment',getcomment);




