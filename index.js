const express=require('express');
const cors = require('cors');
const app=express();
const port=process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hoy 11 febrero 2025")
});

//app.post('/submit',(req,res)=>{
    //console.log(req,body);
    //res.send('detos recibidos');
//});
app.listen(port,()=>{
     console.log(`ejemplo app listen on port ${port}`);
});

