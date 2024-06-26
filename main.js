const cityInput = document.querySelector(".inputText")
const btn = document.querySelector(".btn")


btn.addEventListener("click" , () => {
    const cityName = cityInput.value

    getData(cityName)
})

function getData(name){
    const API = "ec869bd9a82747bcaf0758afdd512312";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
       const {name, sys:{country}, main: {temp, feels_like, humidity}, weather: [{description}], wind: {speed}} = data;
       
       const city = document.querySelector(".city")
       const temperature = document.querySelector(".temp")
       const hum = document.querySelector(".humidity")
       const wind = document.querySelector(".wind")
       const weather = document.querySelector(".weather")
       const feeling = document.querySelector(".feeling")

       city.textContent = `${name}, ${country}`;
       temperature.innerText = `${temp.toFixed(1)}°`;
       hum.textContent = `Nem: %${humidity}`
       wind.innerHTML = `Rüzgar: ${speed}km/s`
       weather.innerHTML = `<i>${description.toUpperCase()}</i>`
       feeling.textContent = `Hissedilen: ${feels_like}°`

    })
    
    .catch(err => console.log(err))

    cityInput.value = "";

}




