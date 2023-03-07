import { getData,getForecast } from "./callAPI";
        
async function createDOM(cityName){
    let temp = await getData(cityName)

    let name = document.getElementById('name')
    let weather = document.getElementById('weather')
    let temperature = document.getElementById('temperature')
    let feeling = document.getElementById('feeling')
    let humidity = document.getElementById('humidity')

    name.innerHTML =`<img src="img/location.png" alt="location">` + temp.name
    weather.innerHTML =  setWeatherImage(temp.weather)
    temperature.innerHTML = Math.round(temp.temperature) + `℃`
    feeling.innerHTML = Math.round(temp.feeling)
    humidity.innerHTML = temp.humidity

    //Forecast creation
    let forecast = await getForecast(cityName)
    console.log(forecast)
    let container = document.getElementById('forecast-container')

    forecast.forEach(element => {
        let forecastDiv = `<div id="card">
                                <div id="card-day">${new Date(element.timestamp * 1000).toLocaleString("en-us", {weekday: "long"})}</div>
                                <div id="card-weather" class="card-weather">${element.weather}</div>
                                <div id="card-temperature">${element.temperature}</div>
                            </div>`                  
        container.innerHTML += forecastDiv  
    })
    setCardImages()
}


function setWeatherImage(weather){
    if(weather == "Clear"){
        return `<img src="img/sun.svg" alt="location">`
    }else if(weather == "Rain"){
        return `<img src="img/cloud-rain.svg" alt="location">`
    }else if (weather == "Clouds"){ 
        return `<img src="img/cloud.svg" alt="location">`
    }else if (weather == "Snow"){
        return `<img src="img/cloud-snow.svg" alt="location">`
    }
}

function setCardImages(){
    let weatherIcon = document.querySelectorAll('.card-weather')
    weatherIcon.forEach(node => {
        if(node.innerHTML == "Clear"){
            node.innerHTML = `<img src="img/sun.svg" alt="location">`
        }else if(node.innerHTML == "Rain"){
            node.innerHTML = `<img src="img/cloud-rain.svg" alt="location">`
        }else if (node.innerHTML == "Clouds"){ 
            node.innerHTML = `<img src="img/cloud.svg" alt="location">`
        }else if (node.innerHTML == "Snow"){
            node.innerHTML = `<img src="img/cloud-snow.svg" alt="location">`
        }
    })
        
}

export {createDOM}