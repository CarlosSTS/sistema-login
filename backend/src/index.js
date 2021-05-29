const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors())
mongoose.connect('mongodb+srv://sistemaLogin:c1a2r3s4@sistemaalugue.ifdez.mongodb.net/sistemaAlugue?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true
});

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('porta 3333')
})