const path=require('path')
const { parse } = require('csv-parse');const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}
//WE NEED TO GIVE A PROMISE BECAUSE STREAM READING TAKES A LOT OF TIME AND IS ASYNCHRONOUS IN NATURE SO WE NEED TO WAIT FOR THE STREAM
//TO BE FINISHED READING BEFORE WE CAN START THE SERVER
function loading(){
    return new Promise((resolve,reject)=>{
        fs.createReadStream(path.join(__dirname,"..","..","data","kepler_data.csv"))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (data) => {
            if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err)
        })
        .on('end',()=>{
        resolve()
        })
})
}
  module.exports={
    habitablePlanets,
    loading
  }