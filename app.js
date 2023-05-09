const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');
const multer = require('multer');
const News = require('./models/News')
const Video = require('./models/Video')
const auth = require('./middleware/auth.middleware');
const fs = require('fs');
const app = express()
const { ObjectId } = require('mongodb');

app.use(express.json({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/video', express.static(path.join(__dirname, 'video')));

// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/test', require('./routes/test.routes'));
// app.use('/api/news', require('./routes/news.routes'));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const storagevideo = multer.diskStorage({
  destination: path.join(__dirname, 'video'),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + '-' + file.originalname)
  }
})
// ___________________________________________________________________NEWS API__________________________________________________________________________________
app.post('/api/news/save', async (req, res) => {
  try {
    let upload = multer({ storage: storage }).single('image');
    upload(req, res, function (err) {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: 'Ошибка загрузки файла' });
      }
      
      if (!req.body.image[0]) {
        return res.status(400).json({ message: 'пожалуйста заполните заголовок' })
      }
      if (!req.body.image[1]) {
        return res.status(400).json({ message: 'пожалуйста заполните описание' })
      }
      if (!req.body.image[2]) {
        return res.status(400).json({ message: 'пожалуйста заполните контент' })
      }
      if (!req.body.image[3]) {
        return res.status(400).json({ message: 'нет авторизации' })
      }
      
      const news = new News({
        image: req.file.filename,
        title: req.body.image[0],
        description: req.body.image[1],
        content: req.body.image[2],
        author: req.body.image[3],
      })
      
      news.save();
      res.json({ message: '201 Created («создано»)' })
    });
  } catch (e) { console.log(e) }
})
app.delete('/api/news/delete/:id', auth,
  async (req, res) => {
    const  id  = req.params.id;
    const data = await News.findOne( { _id: id } );
    try {
      fs.unlink(`${__dirname + "/uploads" + "/" + data.image}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }

      });
      await News.deleteOne({ _id: id });
      res.json({m:'200 успешно'})
    } catch (error) {
      res.status(400).json({ message: error })
    }
  });
app.get('/api/news/show',
  async (req, res) => {
    try {
      const news = await News.find();
      res.json(news)
    } catch (e) {
      res.status(500).json({ message: `Что-то пошло не так, попробуйте снова   ${e}` })
    }
  })
app.get('/api/news/:id',
  async (req, res) => {
    try {
      const   id   = req.params.id;
      News.findOne({ _id: id })
        .then(news => {
          if (news) {
           return res.json(news); // Вывод найденного документа
          } else {
            return res.status(500).json('Документ не найден');
          }
        })
        .catch(error => {
          console.log(error); // Обработка ошибки
        });

    } catch (e) {
      res.status(500).json({ message: `Что-то пошло не так, попробуйте снова   ${e}` })
    }
  })

// ___________________________________________________________________VIDEO API__________________________________________________________________________________
  app.post('/api/video/save', async (req, res) => {
    try {
      let upload = multer({ storage: storagevideo }).single('image');
      upload(req, res, function (err) {
        if (err) {
          console.log(err);
          return res.status(400).json({ message: 'Ошибка загрузки файла' });
        }
        
        if (!req.body.image[0]) {
          return res.status(400).json({ message: 'пожалуйста заполните заголовок' })
        }
        if (!req.body.image[1]) {
          return res.status(400).json({ message: 'пожалуйста заполните описание' })
        }
        if (!req.body.image[2]) {
          return res.status(400).json({ message: 'пожалуйста заполните контент' })
        }
        if (!req.body.image[3]) {
          return res.status(400).json({ message: 'нет авторизации' })
        }
        
        const news = new Video({
          image: req.file.filename,
          title: req.body.image[0],
          description: req.body.image[1],
          content: req.body.image[2],
          author: req.body.image[3],
        })
        
        news.save();
        res.json({ message: 'Created («создано»)' })
      });
    } catch (e) { console.log(e) }
  })
  app.delete('/api/video/delete/:id', auth,
    async (req, res) => {
      const  id  = req.params.id;
      const data = await Video.findOne( { _id: id } );
      try {
        fs.unlink(`${__dirname + "/video" + "/" + data.image}`, (err) => {
          if (err) {
            console.error(err);
            return;
          }
  
        });
        await Video.deleteOne({ _id: id });
        res.json({m:'200 успешно'})
      } catch (error) {
        res.status(400).json({ message: error })
      }
    });
  app.get('/api/video/show', auth,
    async (req, res) => {
      try {
        const news = await Video.find();
        res.json(news)
      } catch (e) {
        res.status(500).json({ message: `Что-то пошло не так, попробуйте снова   ${e}` })
      }
    })
  app.get('/api/video/:id', auth,
    async (req, res) => {
      try {
        const   id   = req.params.id;
        Video.findOne({ _id: id })
          .then(news => {
            if (news) {
             return res.json(news); // Вывод найденного документа
            } else {
              return res.status(500).json('Документ не найден');
            }
          })
          .catch(error => {
            console.log(error); // Обработка ошибки
          });
  
      } catch (e) {
        res.status(500).json({ message: `Что-то пошло не так, попробуйте снова   ${e}` })
      }
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

