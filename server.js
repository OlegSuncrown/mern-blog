const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//const uri = process.env.ATLAS_URI
const uri = process.env.mongodb

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('DB is connected'))

app.use('/articles', require('./routes/articles'))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
      res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}

app.listen(port, () => {
  console.log(`The app is running on Port: ${port}`)
})
