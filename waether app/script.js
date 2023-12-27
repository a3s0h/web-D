const APP_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&";
const API_KEY = "4e8ac027bc5474ec61abb24d19f47e89";
const city = document.querySelector(".city");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humi");
const image = document.querySelector("#image");
const degree=  document.querySelector("#deg");


async function getWeather()
{
    const response = await fetch(APP_URL + `&appid=${API_KEY}`);
    const data =  await response.json();

    city.innerHTML = data.name ;
    humi.textContent = `Humidity : ${data.main.humidity}`;
    wind.textContent = `Wind : ${data.wind.speed}kmph`
    degree.innerHTML = Math.round(data.main.temp)+" C"
    console.log(data);
}

getWeather();

