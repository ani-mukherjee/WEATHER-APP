// By using Fetch API
// key = f6fe70b24534fe4736d9296db868f81f
let date= new Date();
document.getElementById("date").innerHTML= ` ${date.getDate()}-0${date.getMonth()+1}-${date.getFullYear()}`;
setInterval(() => {
   let a = new Date();
   let time = ("0" + a.getHours()).substr(-2) + ':' +("0" + a.getMinutes()).substr(-2)+ ':' + ("0" + a.getSeconds()).substr(-2);
    document.getElementById('time').innerHTML = time;
  }, 1000);

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
        document.getElementById("wind").innerHTML=`Wind-Speed: ${Math.floor(weatherInfo.wind.speed + 7)} km/h`;
        document.getElementById("description").innerHTML= `${weatherInfo.weather[0].description}`;
        document.getElementById("icon").src = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`; // image source given
    })
})