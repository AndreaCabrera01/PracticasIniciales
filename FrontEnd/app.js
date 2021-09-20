const express = require('express')
const app = express()

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + 'public'));
app.set('view engine', 'ejs');

app.use('/', require('./routes/router'))

app.listen(3000, (req, res)=>{
    console.log('hola')
})
