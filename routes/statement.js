const express = require('express');

const statementRouter = Router();

statementRouter.get('/users', (req,res) => {
    res.json('Civilian Records');

});

statementRouter.post('/people', (req, res) => {
    res.json('Suspects Record');
});
