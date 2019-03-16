
let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=86ba4d2c72ca8e279c8006007e3ef735", true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    let t = [weatherData.main.temp];
    let w = [weatherData.wind.speed];
    let h = [weatherData.main.humidity];
    let s = [weatherData.weather[0].main];

    t = Math.round(t);
    w = Math.round(w);
  
    document.getElementById("current-temp").textContent=t;
    document.getElementById("current-speed").textContent=w;
    document.getElementById("current-humidity").textContent=h;
    var windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(w, 0.16) + 0.4275 * t * Math.pow(w, 0.16);
    windChill = Math.round(windChill);
    document.getElementById("current-chill").textContent=windChill;
    document.getElementById("current-skies").textContent=s;
    

}

let forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=86ba4d2c72ca8e279c8006007e3ef735", true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
    
        var tempry = [];
        var datery = [];
        var iconry = [];

    for (i=1; i<forecastData.list.length; i++) {
        dtext=forecastData.list[i].dt_txt;
        if (dtext.includes("06:00:00")) {
            let temperature = forecastData.list[i].main.temp;
            temperature =Math.round(temperature);
            tempry.push(temperature);
            let date = new Date(forecastData.list[i].dt*1000); 
            var wday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var currentdate= wday[date.getDay()];
            datery.push(currentdate);
            var iconcode = forecastData.list[i].weather["0"].icon;
            var iconimg = "https://openweathermap.org/img/w/" + iconcode + ".png";
            iconry.push(iconimg);
        }  
        continue;
    }

    document.getElementById("fcth1").innerHTML = datery[0];
    document.getElementById("fcth2").innerHTML = datery[1];
    document.getElementById("fcth3").innerHTML = datery[2];
    document.getElementById("fcth4").innerHTML = datery[3];
    document.getElementById("fcth5").innerHTML = datery[4];

    document.getElementById("tdicon1").src = iconry[0];
    document.getElementById("tdicon2").src = iconry[1];
    document.getElementById("tdicon3").src = iconry[2];
    document.getElementById("tdicon4").src = iconry[3];
    document.getElementById("tdicon5").src = iconry[4];

    document.getElementById('tdtemp1').innerHTML = tempry[0] + "&deg";
    document.getElementById('tdtemp2').innerHTML = tempry[1] + "&deg";
    document.getElementById('tdtemp3').innerHTML = tempry[2] + "&deg";
    document.getElementById('tdtemp4').innerHTML = tempry[3] + "&deg";
    document.getElementById('tdtemp5').innerHTML = tempry[4] + "&deg";

}