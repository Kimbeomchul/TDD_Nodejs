const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const user = require("./api/user");
const app = express();

if(process.env.NODE_ENV !== 'test'){
    app.use(morgan('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users',user)


module.exports =app;