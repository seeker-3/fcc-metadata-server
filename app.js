const upload  = require('multer')({ dest: 'uploads/' }),
      fs      = require('fs'),
      app     = require('express')()
;

app.post('/upload', upload.single('file'), (req, res) => {
  fs.unlink(req.file.path, err => {if (err) throw err;});
  res.json({size: req.file.size + ' bytes'});
});

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.listen(process.env.PORT || 3000);
