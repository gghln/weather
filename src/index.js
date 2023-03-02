const weather = document.querySelector('#weather')

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#click')
    button.addEventListener('click', () =>{
        const search = document.querySelector('#search')
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ search.value +'&appid=9699f8ffb523c0357e91993241fa9691',{mode:'cors'})
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                console.log(response)
                console.log(response.name)
            })
    })
})