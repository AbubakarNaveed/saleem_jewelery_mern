const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')



app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

require('./Connection/connection')

//for production
// app.use(express.static(path.join(__dirname,'/jewelry/build')))

// app.get('*',(req, res) =>{res.sendFile(path.join(__dirname,'/jewelry/build','index.html'))})

// if(process.env.NODE_ENV === 'production'){
// app.use(express.static('jewelry/build'))
// app.get('*',(req, res) =>{res.sendFile(path.resolve(__dirname,'/jewelry/build','index.html'))})
// }

app.listen(port, console.log(`${port} running`))

app.use('/admin', require('./routes/admin'))

app.use('/authUser', require('./routes/auth'))
