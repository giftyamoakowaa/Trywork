import express from "express";
import { blogRouter } from "./routes/blog_routes.js";
 import { dbconnection } from "./config/db.js";


// connecting to database

dbconnection();

const app = express();
app.use(express.json());
app.use(blogRouter);


// app.get('/', (req, res) => {
//     res.json('home page');
// }
// );
// app.post('/', (req, res) =>
//     res.json('comments')
// )

app.listen(4000, () =>
    console.log('Server is running') 
)


