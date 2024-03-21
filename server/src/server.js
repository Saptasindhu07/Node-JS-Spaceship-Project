const PORT=process.env.PORT ||8000
const http=require('http')
const app=require("./app")
const planetsModel=require("./models/planets.model")
const server=http.createServer(app.app)
async function start(){
    await planetsModel.loading()
    server.listen(PORT,()=>{
        console.log("Listening on ",PORT)
    })
}
start()