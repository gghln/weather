(()=>{"use strict";async function e(e){let t=await async function(e){let t=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=9699f8ffb523c0357e91993241fa9691",{mode:"cors"}),n=await t.json();return console.log(n),n}(e);return{name:t.name,temperature:t.main.temp,feeling:t.main.feels_like,humidity:t.main.humidity,lat:t.coord.lat,lon:t.coord.lon}}async function t(t){let n=await e(t),a=n.lat,i=n.lon,o=await fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+a+"&lon="+i+"&units=metric&appid=9699f8ffb523c0357e91993241fa9691",{mode:"cors"}),l=await o.json();return console.log(l),l}window.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector("#click");let a=document.getElementById("search");n.addEventListener("click",(()=>{console.log(a.value),async function(t){let n=await e(t),a=document.getElementById("name"),i=document.getElementById("temperature"),o=document.getElementById("feeling"),l=document.getElementById("humidity");a.innerHTML=n.name,i.innerHTML=n.temperature,o.innerHTML=n.feeling,l.innerHTML=n.humidity}(a.value),t(a.value),async function(e){let n=await t(e);function a(e,t){this.temperature=e,this.weather=t}let i=[];for(let e=0;e<40;e+=8){let t=new a(n.list[e].main.temp,n.list[e].weather[0].main);i.push(t)}console.log(i)}(a.value)}))}))})();