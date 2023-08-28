const express = require('express')
const PORT = 3000
const app = express()

app.get("/app2",(req, res)=>{
  res.send("esta es la app 2")
})

app.listen(PORT, ()=>{
  console.log("server app 2 listen on port", PORT);
})