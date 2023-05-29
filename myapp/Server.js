import express from 'express'
import 'dotenv/config'
import db from './config/db.js'
import routerUrl from './router/userUrl.js'
const app=express();

db.once("open",()=>{
    console.log('connected')
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=process.env.PORT||3000;
app.use('/',routerUrl)
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
    console.log('server is listening at port 8000')
})