const express = require('express');
const mongoose = require("mongoose");
const userRouter = require('./user');
const app = express()
// const DB_URl = "mongodb://localhost:27017/imooc";
// mongoose.connect(DB_URl);
//
// mongoose.connection.on('connected', function () {
//     console.log("mongo connect");
// })
//

app.use('/user', userRouter);

app.get('/', function (req, res) {
    res.send('<h1> hello </h1>');
})


app.listen(9093, function () {
    console.log("server has start");
})



