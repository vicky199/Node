const request=require('request');

const getWeather = (lat,lang,callBack) => {
    request({url : `https://api.darksky.net/forecast/1c3e0aa77f8066e8c59698f59d432b92/${lat},${lang}`,
         json:true},(error,response,body)=>{
             if(!error&&response.statusCode===200)
             {
                 callBack(undefined,
                 {
                    temperature:body.currently.temperature,
                    apparentTemperature:body.currently.apparentTemperature
                 }
                );
             } 
            else
        { 
            callBack("Eanble to connect weather server");
        }
     })
}

module.exports.getWeather = getWeather;