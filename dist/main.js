(()=>{"use strict";!async function(){const a=await async function(a,t,o){try{const c=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${a},${t},${o}&appid=8696ac5681360fb97515b98c3d94684c`,{mode:"cors"}),n=await c.json();return[n[0].lat,n[0].lon]}catch(a){console.log(a)}}("Cincinnati","OH","USA"),t=await async function(a,t){try{const o=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${t}&appid=8696ac5681360fb97515b98c3d94684c`,{mode:"cors"}),c=await o.json();console.log(c)}catch(a){console.log(a)}}(a[0],a[1]),o=await t.main.temp;console.log(o)}()})();