const {Router} = require('express')
const router = Router()
const City = require('../models/City')

router.get('/', async (req, res) => {
    try {
      const cities = await City.find()
      res.json(cities)
    } catch (e) {
      res.status(500).json({message: 'Что то пошло не так'})
    }
  })

module.exports = router