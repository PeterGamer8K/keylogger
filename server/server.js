const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.json({
        message: 'Hello'
    });
});


app.post('/saveKey', function(req, res) {


})

app.listen(3333, () => {
    console.log("http server running");
});