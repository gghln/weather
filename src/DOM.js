import { getData} from "./callAPI";

        
async function createDOM(cityName){
    let temp = await getData(cityName)

    let name = document.getElementById('name')
    let temperature = document.getElementById('temperature')
    let feeling = document.getElementById('feeling')
    let humidity = document.getElementById('humidity')

    name.innerHTML = temp.name
    temperature.innerHTML = temp.temperature
    feeling.innerHTML = temp.feeling
    humidity.innerHTML = temp.humidity
}
export {createDOM}