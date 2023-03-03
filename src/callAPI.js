async function callAPI(cityName){
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&units=metric&appid=9699f8ffb523c0357e91993241fa9691', {mode:'cors'})
    let data = await response.json()

    console.log(data)
    return data
}

async function getData(cityName){
    let city = await callAPI(cityName)

    let cityWeather = {
        name: city.name,
        temperature: city.main.temp,
        feeling: city.main.feels_like,
        humidity: city.main.humidity,
        lat: city.coord.lat,
        lon: city.coord.lon
    }

    return cityWeather
}


async function Forecast(cityName){
    let data = await getData(cityName)

    let lat = data.lat
    let lon = data.lon

    let response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lon +'&units=metric&appid=9699f8ffb523c0357e91993241fa9691', {mode:'cors'})
    let forecast = await response.json()

    console.log(forecast)
    return forecast
}

async function getForecast(cityName){
    let data = await Forecast(cityName)

    function Day(temperature,weather){
       this.temperature = temperature
       this.weather = weather
    }

    let array = []

    for(let i = 0; i < 40; i += 8){
        let day = new Day (data.list[i].main.temp,data.list[i].weather[0].main)
        array.push(day)
    }

    console.log(array)
}

export {getData,getForecast,Forecast}