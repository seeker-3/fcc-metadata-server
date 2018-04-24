const
      log = console.log,
      fs = require("fs"),
      fileUpload = require('express-fileupload'),
      multer  = require('multer'),
      upload = multer({ dest: 'uploads/' }),
      express = require('express'),
      app = express()
;


app.listen(process.env.PORT || 3000);

app.post('/upload', upload.single('file'), (req, res, next) => {
  res.json({size: req.file.size + ' bytes'});
})

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
