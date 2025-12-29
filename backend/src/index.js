const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors())
mongoose.connect('mongodb+srv://YOUR_CONNECTION_STRING',{
useNewUrlParser: true,
useUnifiedTopology: true
});

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('porta 3333')
})