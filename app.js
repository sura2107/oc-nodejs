const express = require('express')
const app = express()
const path = require('path')
const port = 8080


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
