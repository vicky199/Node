 const yargs=require('yargs');
const geoCode= require('./geocode/geoCodePromise');
const getWeather=require('./weather/weatherPromise');
var argv=yargs.options({
    a:{   
        demand:true,
        alias:'Address',
        dscription:'Address',
        string:true
    }
}).help().alias('help','h').argv;
geoCode.geoCode(argv.a).then((res)=>{
   console.log(`Address is :${res.Address}.`)
  return getWeather.getWeather(res.lattitude,res.Langitude);
}).then((res)=>{
console.log(`temperature is ${res.temperature} but feels like ${res.apparentTemperature}`);
}).catch((err)=>{
  console.log(err);
})
//console.log(argv);
