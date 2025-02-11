const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.send("hoy 11 febrero 2025")
})
app.listen(port,()=>{
     console.log(`ejemplo app listen on port ${port}`)
})
