const express = require("express");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json('home page');
}
);
app.post('/', (req, res) =>
    res.json('All statement added')
)

app.listen(4000, () =>
    console.log('app is running') 
)


