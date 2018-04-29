const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:4000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(4000, console.log('Your app is running on port: 4000'));
