const express = require('express');
const app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000, console.log('Your app is running on port: 4000'));
