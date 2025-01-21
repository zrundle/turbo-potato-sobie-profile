const express = require('express')
const app = express()
const port = process.env.PORT || 3000;  

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.sendFile('index.html');

})


//endpoint, middleware(s)
app.get('/helloRender', function (req, res) {
  res.send('Hello Express from Real World<br><a href="/">back to home</a>')
})




app.listen(
  port, 
  ()=> console.log(
    `server is running on ... ${port}`
    )
  );