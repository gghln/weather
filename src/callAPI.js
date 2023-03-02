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
        humidity: city.main.humidity
    }

    return cityWeather
}

export {getData}