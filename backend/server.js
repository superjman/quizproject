const express = require('express')
const cors = require('cors')

const routes = require('./routes/api')

const { sequelize } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen({ port: 5000 }, async () => {
  console.log('Server up on http://localhost:5000')
  await sequelize.authenticate()
  console.log('Database Connected!')
})