import { createDOM } from "./DOM"

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#click')
    let cityName = document.getElementById('search')
    button.addEventListener('click', () =>{
        createDOM(cityName.value)
    })
})