 const yargs=require('yargs');
 const axios=require('axios');
var argv=yargs.options({
    a:{
        demand:true,
        alias:'Address',
        dscription:'Address',
        string:true
    }
}).help().alias('help','h').argv;

let encodedURL=encodeURIComponent(argv.a);
let geoURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyBOEKNiEAwcp_rTDW7Xgl6MBJ3c47g1VAk`;

axios.get(geoURL).then((geoResponse)=>{
    if(geoResponse.data.status === 'ZERO_RESULTS'){
        throw new Error("uanble to find Location");
    }
    else{
        console.log(geoResponse.data.results[0].formatted_address);
        let lat=geoResponse.data.results[0].geometry.location.lat;
        let lng=geoResponse.data.results[0].geometry.location.lng;
        let weatherURL=`https://api.darksky.net/forecast/1c3e0aa77f8066e8c59698f59d432b92/${lat},${lng}`;
        return axios.get(weatherURL);
    }
    
}).then((weatherResponse)=>{
    console.log(`temperature is ${weatherResponse.data.currently.temperature} but feels like ${weatherResponse.data.currently.apparentTemperature}`);
}).catch((err)=>{
    if(err.code==='ENOTFOUND')
    {
        console.log('Unable to connect!');
    }
    else
       console.log(err);
});
