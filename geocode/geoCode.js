const request=require('request');

const geoCode = (address,callBack) => {
    let encodeUrl=encodeURIComponent(address);
    request({url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBOEKNiEAwcp_rTDW7Xgl6MBJ3c47g1VAk`,
         json:true},(error,response,body)=>{
             if(error)
             {
                 callBack("Uanble to connect google server");
             } else if(body.status === 'ZERO_RESULTS'){
                callBack("Uanble to find locaion");
             } else if(body.status === 'OK'){
                 callBack(undefined,{
                    Address:body.results[0].formatted_address,
                    lattitude:body.results[0].geometry.location.lat,
                    Langitude:body.results[0].geometry.location.lng
                 })
             } else {
                 callBack("error while connecting");
             }
                      })
}

module.exports.geoCode = geoCode;