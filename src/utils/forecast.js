const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const location = latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=3f92300cff356557c70af21c4aad725f&query=' + location + '&units=f'

    request({url, json: true}, (error, {body}) => { // json=true will parse the json
        if (error){
            callback('Unable to connect to weather service', undefined) //2bd arg could be left blank
        } else if (body.error) {
            callback('Unable to find location: ' + body.error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast