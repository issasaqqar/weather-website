const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/eb3184a591a9a6fd109c724e6de17231/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. The highest today is ' + body.daily.data[0].temperatureHigh+ ' while the lowest is ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast