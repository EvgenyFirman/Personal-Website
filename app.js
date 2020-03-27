const express = require('express');
const path = require("path")
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'))

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"))
})
app.listen(process.env.PORT || 3000)