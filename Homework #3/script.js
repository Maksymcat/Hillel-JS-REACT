let apiUrl = `https://openweathermap.org/current/weather.id`
fetch(apiUrl)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('pomilka', error))