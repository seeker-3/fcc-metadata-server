const log = console.log;
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/*', (req, res) => {
  log('hi');
  res.end();
});
