// key = f6fe70b24534fe4736d9296db868f81f
let date= new Date();
document.getElementById("date").innerHTML= `Today: ${date.getDate()}-0${date.getMonth()+1}-${date.getFullYear()}`;
let input= document.getElementById("Location");
input.addEventListener("click",display=()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=f6fe70b24534fe4736d9296db868f81f`;
    fetch(url)
    .then((response)=>{
        return response.json();
    }).then((weatherInfo)=>{
        //Using json pathfinder website
        document.getElementById("temp").innerHTML=`Now ${Math.floor(weatherInfo.main.temp -273.15)}° in ${input.value}`;
        document.getElementById("feelslike").innerHTML=`Feels like ${Math.floor(weatherInfo.main.feels_like -273.15)}°`;
        document.getElementById("humidity").innerHTML=`Humidity: ${Math.floor(weatherInfo.main.humidity)}%`;
        document.getElementById("wind").innerHTML=`Wind-speed: ${Math.floor(weatherInfo.wind.speed + 8)} km/h`;
        document.getElementById("description").innerHTML= `${weatherInfo.weather[0].description}`;
        document.getElementById("icon").src = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`; // image source given
    })
})