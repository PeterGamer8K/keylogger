const express = require('express');
const cors = require('cors')
const app = express();



app.use(cors());



app.use(express.json());
const savedKeys = [];



app.get('/', function(req, res) {
    res.json({
        message: 'Hello'
    });
});


app.post('/saveKey', function(req, res) {



    console.log(req.body);


    return res.status(201).send();
});


app.listen(3333, () => {
    console.log("http server running");
});