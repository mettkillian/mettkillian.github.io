
var temp = parseInt(document.getElementById('current-temp').innerHTML);
var speed = parseInt(document.getElementById('current-speed').innerHTML);
var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
windChill = Math.round(windChill);
document.getElementById('current-chill').textContent = windChill;