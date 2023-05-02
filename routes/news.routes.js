
const {Router} = require('express');
const multer  = require('multer');
// const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
// const Progress = require('../models/Progress');
const News = require('../models/News')
// const Comments = require('../models/Comments')
const auth = require('../middleware/auth.middleware');
// const User = require('../models/User');

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, "wedew.png")
  }
});
const upload = multer({ storage });
// /api/news/save
router.post('/save', auth,  upload.single('image'),
async (req, res) => {
  try {
    // const {title} = req.body;
    // const existing = await News.findOne({ title })
    // if (existing) {
    //   return res.json({ Test: existing })
    // }
      // сохранение файла на сервере
 
      const {image,discription,content,author,title} = req.body;
      console.log(req.body);
      const filePath = `uploads/${image.originalname}`;
      fs.writeFile(filePath, image.buffer, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Ошибка при сохранении файла');
        }
        console.log('Файл успешно сохранен');
      });

    // const { file } = req.files;
 
    const news = new News({
        image:filePath,
        title:title,
        discription :discription,
        content : content,
        author: author,
      })
      await news.save();
      res.json(news);
  } catch (e) {
    res.status(500).json({ message: `Что-то пошло не так, попробуйте снова: ${e.message}` });
  }
})
// /api/news/show
router.get('/show',auth,
async (req, res) => {
    try {
        const news = await News;
        res.json(news)
    } catch (e) {
      res.status(500).json({ message:`Что-то пошло не так, попробуйте снова   ${e}` })
    }
})
module.exports = router