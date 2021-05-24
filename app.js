const request = require('request');

let weather_descriptions;

url = 'http://api.weatherstack.com/current?access_key=d68290a9c6066ac8bf77552897b6becf&query=19.2500,%20-103.7271';


request({url : url, json : true}, (error, response, )=>{
  weather_descriptions = response.body.current.weather_descriptions[0];
  request({
    method: 'POST',
    url: 'https://libretranslate.com/translate',
    body: JSON.stringify({
      q: weather_descriptions,
      source: "en",
      target: "es"
    }),
    headers: {
      "Content-Type": "application/json" 
    }},function (error, response, body) {
      if (error) throw new Error(error);
      const data = JSON.parse(response.body);
      console.log(data);
  });
  console.log('Hora consulta: ' + response.body.current.observation_time);
  console.log('Clima: ' + response.body.current.weather_descriptions[0]);
  console.log('Temperatura: ' + response.body.current.temperature + '°C');
  console.log('Temperatura sensacion termica: ' + response.body.current.feelslike + ' °C');
  console.log('Velocidad viento: ' + response.body.current.wind_speed + ' km/h');
  console.log('Humedad  : ' + response.body.current.humidity + ' %');
  console.log('Precipitacion  : ' + response.body.current.precip + ' %');
});



/*
request({url : url, json : true}, (error, response, )=>{
    weather_descriptions = response.body.current.weather_descriptions[0];
    console.log(response.body.current.weather_descriptions[0])
    request({
      method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'accept-encoding': 'application/gzip',
      'x-rapidapi-key': '7fa182c322mshad2e763340be007p1cb711jsn0d39858816c8',
      'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
      useQueryString: true
    },
    form: {q: weather_descriptions , target: 'es', source: 'en'}
    },function (error, response, body) {
      if (error) throw new Error(error);
      const data = JSON.parse(response.body);
      console.log(body);
  });
});

*/

