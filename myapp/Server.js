import express from 'express'
import 'dotenv/config'

const app=express();


const port=process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.send('welcome to url shortner')
})
app.listen(port,()=>{
    console.log('server is listening at port 5000')
})