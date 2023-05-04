const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');
const multer = require('multer');

const app = express()
  
app.use(express.json({ extended: true }))
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/test', require('./routes/test.routes'));
// app.use('/api/news', require('./routes/news.routes'));
const storage = multer.diskStorage({
  destination: path.join(__dirname,  'uploads'),
  filename: function (req, file, cb) {        
      // null as first argument means no error
      cb(null, Date.now() + '-' + file.originalname )
  }
})

app.post('/api/news/save', async (req, res) => {
  try {
    let upload = multer({ storage: storage}).single('avatar');
		
		upload(req, res, function(err) {
			// req.file contains information of uploaded file
			// req.body contains information of text fields
      console.log(req);
			if (!req.file) {
				return res.send('Please select an image to upload');
			}
			else if (err instanceof multer.MulterError) {
				return res.send(err);
			}
			else if (err) {
				return res.send(err);
			}
			
			const classifiedsadd = {
				image: req.file.filename
			};
			console.log(classifiedsadd);
			// const sql = "INSERT INTO users SET ?";
			// connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
			// 	res.json({ success: 1 })      

			// });  
		});
  }catch (e) { console.log(e)}
})

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

