const path=require('path')
const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const planetsRouter=require('./router/planets/planets.router')
const launchesRouter=require("./router/launches/launches.router")
const app=express()
app.use(cors({
    origin:'http://localhost:3000'
}))
//app.use(morgan('combined'))
app.use(express.json())
//app.use(express.static(path.join(__dirname,"..","public")))
//app.get("/*",(req,res)=>{
//res.sendFile(path.join(__dirname,"..","public","index.html"))
//})
app.use(planetsRouter.planetsRouter)
app.use(launchesRouter.launchesRouter)
module.exports={
    app
}