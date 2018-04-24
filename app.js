const
  log = console.log,
  fs = require("fs"),
  express = require('express'),
  multer = require('multer'),
  app = express(),
  upload = multer({ dest: 'uploads/' })
;


app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.post('/files/', (req, res) => {
  log('hi');
  res.end();
});
