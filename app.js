const express = require('express');
const path = require('path');

const app  = express();
const publicPath = path.resolve(__dirname,'./public');

app.use(express.static('public'));
app.listen(3030,() => console.log('Dale que arranca en el 3030'));

//home
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/index.html'))
});

