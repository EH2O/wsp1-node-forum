require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;


const indexRouter = require('./routes/index');

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use(bodyParser.urlencoded({ extended: true }))  

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


