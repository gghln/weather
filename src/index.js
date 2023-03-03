import { getForecast, Forecast } from "./callAPI"
import { createDOM } from "./DOM"

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#click')
    let cityName = document.getElementById('search')
    button.addEventListener('click', () =>{
        console.log(cityName.value)
        createDOM(cityName.value)
        Forecast(cityName.value)
        getForecast(cityName.value)
    })
})