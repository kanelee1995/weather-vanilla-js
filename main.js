(()=>{"use strict";function e(e,t,n,a){const i=document.getElementById("rightPanel"),d=document.getElementById("leftPanel"),m=document.createElement("p"),r=document.createElement("p"),l=document.createElement("p"),c=document.createElement("p");r.innerHTML=`${e}`,m.innerHTML=`${t}`,l.innerHTML=`${n}`,c.innerHTML=`${a}`,i.appendChild(m),i.appendChild(r),i.appendChild(l),d.appendChild(c)}const t=new Date,n=document.getElementById("cityName");n.addEventListener("keydown",(t=>{"Enter"===t.key&&(""===n.value?console.log("City not found"):""!==n.value&&async function(t){if(""===document.getElementById("leftPanel").innerHTML&&""===document.getElementById("rightPanel").innerHTML)try{const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=20fccb124e29dc07ede0a07abdaa72c1`,{mode:"cors"}),a=await n.json();e("Humidity: "+a.main.humidity+"%","Temperature: "+a.main.temp+"°","Feels like: "+a.main.feels_like+"°",`${t}`)}catch(e){alert("Error - invalid input")}else if(""!==document.getElementById("leftPanel").innerHTML||""!==document.getElementById("rightPanel").innerHTML){document.getElementById("rightPanel").innerHTML="",document.getElementById("leftPanel").innerHTML="";try{const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=20fccb124e29dc07ede0a07abdaa72c1`,{mode:"cors"}),a=await n.json();e("Humidity: "+a.main.humidity+"%","Temperature: "+a.main.temp+"°","Feels like: "+a.main.feels_like+"°",`${t}`)}catch(e){alert("Error - invalid input")}}}(n.value))})),(t.getHours>="18"||t.getHours<="18")&&(document.getElementById("container").style.backgroundImage="url(/src/img/night.jpeg)")})();