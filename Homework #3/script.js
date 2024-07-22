let apiKey = '5151b416bdebc3f70c745987946a52fa'
let div = document.getElementById('bob')
let diver = document.getElementById('bober')
let refreshWeather = document.getElementById('refreshWeatherjs')


document.addEventListener('DOMContentLoaded', function(){

  getWeatherData()
   useWeatherData()
 
  })
  



    function getWeatherData(){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kuznetsovsk&lang=ru&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(function(json){
   useWeatherData(json)
 
  })
    }
refreshWeather.addEventListener('click',function(){
setTimeout(getWeatherData, 1000);
  
})

function useWeatherData(json){
    div.textContent = `humidity = ${json.main.humidity}%,  temp = ${json.main.temp}, feels like =  ${json.main.feels_like}`
   diver.textContent = `Хмарність = ${json.weather[0].description} Швидкість ${json.wind.speed}km/h, pressure = ${json.main.pressure}`
}