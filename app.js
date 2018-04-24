const
      log = console.log,
      fs = require("fs"),
      fileUpload = require('express-fileupload'),
      express = require('express'),
      app = express()
;

app.use(fileUpload());
app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index2.html'));

app.post('/upload', (req, res) => {
  log(req.files.sample);
  res.end();
});
