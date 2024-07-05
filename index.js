import express from "express";
import { commentRouter } from "./routes/comment_route.js";
 import { dbconnection } from "./config/db.js";


// connecting to database

dbconnection();

const app = express();
app.use(express.json());
app.use(commentRouter);


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


