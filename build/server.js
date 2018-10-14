var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

var server = app.listen(8090, () => {
    console.log('Example app listening on port 8090!');
});