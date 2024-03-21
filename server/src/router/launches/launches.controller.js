const launchesModel=require("../../models/launches.model")
let model={}
let flightNumberCount=1
let a=[]
function launchesControllerGET(req,res){
    return res.json(a)
}
function launchesControllerPOST(req,res){
    if(req.body.mission && req.body.rocket && req.body.target && req.body.launchDate){
        let launch={}
        launch.flightNumber=flightNumberCount
        launch.mission=req.body.mission
        launch.rocket=req.body.rocket
        launch.launchDate=new Date(req.body.launchDate)
        launch.target=req.body.target
        launch.success=true
        launch.upcoming=true
        model[flightNumberCount]=launch
        console.log(launch)
        a.push(launch)
        console.log(a)
        launchesModel.updateMainModel(model,flightNumberCount)
        flightNumberCount=flightNumberCount+1
        return res.status(201).json(launch)
        
    }
    else if(!req.body.mission || !req.body.rocket || !req.body.destination || !req.body.launchDate){
        return res.status(400).end()
    }
}
module.exports={
    launchesControllerGET,
    launchesControllerPOST,
}