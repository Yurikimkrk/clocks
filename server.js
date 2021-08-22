const express = require('express')
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

// app.use(express.json({extended: true}))
app.use(cors())

app.use('/api/city', require('./routes/cityRoutes'))

// app.use('/api/link', require('./routes/linkRoutes'))
// app.use('/to', require('./routes/redirectRoutes'))

// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static(path.join(__dirname, 'client', 'build')))
//
//   app.get('*', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }
// export const baseUrl = config.get('baseUrl')

const PORT = config.get('port')

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('server error', e.message)
    process.exit(1)
  }
}

start()