const multer  = require('multer'),
      upload  = multer({ dest: 'uploads/' }),
      express = require('express'),
      app     = express()
;

app.post('/upload', upload.single('file'), (req, res) => 
  res.json({size: req.file.size + ' bytes'})
);

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.listen(process.env.PORT || 3000);
