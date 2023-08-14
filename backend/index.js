const connnectToMongo = require("./db")
connnectToMongo();
const express = require('express')
var cors = require('cors')


const app = express()
const port = process.env.PORT


app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook server listening on port ${port}`)
})
