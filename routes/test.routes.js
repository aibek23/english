
const {Router} = require('express');
const Progress = require('../models/Progress');
const auth = require('../middleware/auth.middleware');
const User = require('../models/User');

const router = Router();

// /api/test/save
router.post('/save', auth, 
async (req, res) => {
  try {
    const userId = req.user.userId;
    const existing = await Progress.findOne({ userId })
    if (existing) {
      return res.json({ Test: existing })
    }
    const {testName, size, mistakes} = req.body
    const Test = new Progress({
        testName:testName,
        size :size,
        mistakes : mistakes,
        user: req.user.userId,
      })
      await Test.save();
      res.status(201).json({ Test });
  } catch (e) {
    res.status(500).json({ message:`Что-то пошло не так, попробуйте снова   ${e}` })
  }
})
// /api/test/person
router.get('/person',auth,
async (req, res) => {

    try {
        const userId = req.user.userId;
        const process = await Progress.find({user: userId });
        res.json(process)
    } catch (e) {
      res.status(500).json({ message:`Что-то пошло не так, попробуйте снова   ${e}` })
    }
})
module.exports = router