const express=require('express')
const getAllPlanets=require("./planets.controller")
const planetsRouter=express.Router()
planetsRouter.get("/planets",getAllPlanets.getAllPlanets)
module.exports={
    planetsRouter
}