const express=require('express')
const launchesController=require("./launches.controller")
const launchesRouter=express.Router()
launchesRouter.get('/launches',launchesController.launchesControllerGET)
launchesRouter.post('/launches',launchesController.launchesControllerPOST)
module.exports={
    launchesRouter
}