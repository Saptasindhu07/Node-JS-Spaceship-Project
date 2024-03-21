let launchesMainModel={}
function updateMainModel(model,count){
    launchesMainModel[count]=model[count]
}
module.exports={
    updateMainModel,
    launchesMainModel
}