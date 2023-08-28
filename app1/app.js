const express = require('express')
const PORT = 3001
const app = express()

app.get("/app1",(req, res)=>{
  res.send("esta es la app 1")
})

app.listen(PORT, ()=>{
  console.log("server app 2 listen on port", PORT);
})