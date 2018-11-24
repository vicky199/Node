const request=require('request');

const geoCode = (address) => {
    return new Promise((resolve,reject)=>{
        let encodeUrl=encodeURIComponent(address);
        request({url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBOEKNiEAwcp_rTDW7Xgl6MBJ3c47g1VAk`,
             json:true},(error,response,body)=>{
                 if(error)
                 {
                    reject("uanble to connect google server");
                 } else if(body.status === 'ZERO_RESULTS'){
                    reject("uanble to find Location");
                 } else if(body.status === 'OK'){
                    resolve({
                        Address:body.results[0].formatted_address,
                        lattitude:body.results[0].geometry.location.lat,
                        Langitude:body.results[0].geometry.location.lng
                     })
                 } else {
                    reject("error while connecting");
                 }
                          })
    })
}
module.exports.geoCode = geoCode;