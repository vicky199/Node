 const yargs=require('yargs');
const geoCode= require('./geocode/geoCode.js');
const getWeather=require('./weather/weather');
var argv=yargs.options({
    a:{
        demand:true,
        alias:'Address',
        dscription:'Address',
        string:true
    }
}).help().alias('help','h').argv;

geoCode.geoCode(argv.a,(error,result) =>{
    if(error){
        console.log(error);
    }else {
        console.log(JSON.stringify(result.Address,undefined,2));
        getWeather.getWeather(result.lattitude,result.Langitude,(weatherError,WeatherResult)=>{
            if(weatherError){
                console.log(weatherError);
            }else {
                console.log(`temprature is ${WeatherResult.temperature}  but it feels like ${WeatherResult.apparentTemperature} ` )
            }
    })
    }
});
//console.log(argv);
