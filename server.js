const express = require('express')
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

app.use(cors())

app.use('/api/city', require('./routes/cityRoutes'))

const PORT = config.get('port') || 5000

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
  } catch (e) {
    console.log('server error', e.message)
    process.exit(1)
  }
}

start()