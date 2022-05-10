const request = require('request')

const forecast = (latitude , longitude , callback) => {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=82aae1c4d04c48a28b4185232220705&q=' + latitude + ',' + longitude + '&aqi=yes&days=2&lang=ei'
    request( {url , json:true} , (error , {body}) => {
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location. Try another search.' , undefined)
        }
        else{
            callback(undefined , body.current.condition.text + ' . Wind speed ' + body.current.wind_mph + ' mph . It is currently ' + body.current.temp_c + ' degrees out. There is a ' + body.current.precip_in + '% chance of rain.')
        }
    })
}

module.exports=forecast