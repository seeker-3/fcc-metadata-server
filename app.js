const log = console.log;
const fs = require("fs");
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
  if (!req.query.file){
    res.sendFile(__dirname + '/views/index.html');
  } else {
    res.send(fs.statSync(req.query.file).size);
  }
});
