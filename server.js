const express = require('express');
const app = express()

app.get('/',(req,res)=>{res.send("Hello from the server")})

app.listen(5000,()=>{
    console.log("Server is UP")
})