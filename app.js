const
      log = console.log,
      fs = require("fs"),
      fileUpload = require('express-fileupload'),
      multer  = require('multer'),
      upload = multer({ dest: 'uploads/' }),
      express = require('express'),
      app = express()
;

//app.use(fileUpload());
app.listen(process.env.PORT || 3000);

app.post('/upload', upload.single(), function (req, res, next) {
  log(req.file);
  res.end();
})

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

// app.post('/upload', (req, res) => {
//   log(req.files.sampleFile, req.file);
//   res.end();
// });

