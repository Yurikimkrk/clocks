const {Router} = require('express')
const router = Router()
const City = require('../models/City')
const config = require('config')

router.get('/', async (req, res) => {
    try {
      const cities = await City.find()
      console.log(config.get('port'))
      res.json(cities)
    } catch (e) {
      res.status(500).json({message: 'Что то пошло не так'})
    }
  })

module.exports = router