let planetsModel=require("../../models/planets.model")
function getAllPlanets(req,res){
    res.status(200).json(planetsModel.habitablePlanets)
}
module.exports={
    getAllPlanets
}