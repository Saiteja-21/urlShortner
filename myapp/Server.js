import express from 'express'
import 'dotenv/config'

const app=express();


const port=process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.send('welcome to url shortner')
})
app.get('/i/google',(req,res)=>{
    res.send('https://www.google.com')
})
app.get('/i/github',(req,res)=>{
    res.send('https://github.com')
})
app.get('/i',(req,res)=>{
    const obj=[{
       endpoint:'/i/google',
       returns:"https://www.google.com",
      
    },
{
    endpoint:'/i/github',
   returns :"https://github.com"
}]
    res.json(obj)

})
app.get('/r/google',(req,res)=>{
    res.redirect('https://www.google.com')
})
app.get('/r/github',(req,res)=>{
    res.redirect('https://www.github.com')
})

app.listen(port,()=>{
    console.log('server is listening at port 5000')
})