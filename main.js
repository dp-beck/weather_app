(()=>{"use strict";!async function(t,a,e){const o=await async function(t,a,e){try{const o=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t},${a},${e}&appid=8696ac5681360fb97515b98c3d94684c`,{mode:"cors"}),c=await o.json();return[c[0].lat,c[0].lon]}catch(t){console.log(t)}}("Cincinnati","OH","USA"),c=await async function(t,a){try{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${a}&appid=8696ac5681360fb97515b98c3d94684c&units=imperial`,{mode:"cors"});return await e.json()}catch(t){console.log(t)}}(o[0],o[1]);console.log(c),console.log(`The temperature is ${c.main.temp} Fahrenheit.`),console.log(`The weather today is ${c.weather[0].description}.`)}()})();