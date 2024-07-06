import { Router } from "express";
import { postblog, getblog } from "../controller/blog_controller.js";

export const blogRouter = Router();


blogRouter.post('/comment',postblog);
blogRouter.get('/comment',getblog);
