mapboxgl.accessToken = 'pk.eyJ1IjoiZGFpbm9uIiwiYSI6ImNqdGtzZXJiajJ6YW00MG11MzB1MXMxNzEifQ.6lhJiRWvvXxU4zmhHXrMfg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-111.737441, 40.036675],
zoom: 13
});

let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', "https://api.openweathermap.org/data/2.5/weather?zip=84651&units=imperial&APPID=86ba4d2c72ca8e279c8006007e3ef735", true);
weatherRequest.send();
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    let t = [weatherData.main.temp];
    let w = [weatherData.wind.speed];
    let h = [weatherData.main.humidity];
    let s = [weatherData.weather[0].main];
    let d = [weatherData.wind.deg];
    let dir="";    
    t = Math.round(t);
    w = Math.round(w);
        if ((d >= 337 && d <= 360) || (d >=0 && d <= 22)) {
            dir ="N";
        }    
        else if (d >= 23 && d <= 67) {
            dir ="NE";
        }
        else if (d >= 68 && d <= 112) {
            dir ="E";
        }
        else if (d >= 113 && d <= 157) {
            dir ="SE";    
        }
         else if (d >= 158 && d <= 202) {
            dir ="S";
        }
        else if (d >= 203 && d <= 246) {
            dir ="SW";
        }
        else if (d >= 247 && d <= 290) {
            dir ="W";
        }
        else dir = "NW"
  
    document.getElementById("current-temp").textContent=t;
    document.getElementById("current-speed").textContent=w;
    document.getElementById("current-humidity").textContent=h;
    var windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(w, 0.16) + 0.4275 * t * Math.pow(w, 0.16);
    windChill = Math.round(windChill);
    document.getElementById("current-chill").textContent=windChill;
    document.getElementById("current-skies").textContent=s;
    document.getElementById("direction").textContent=dir;
}

var temples, templesindex;
var article = document.querySelector('article');
var requestURL = "/mettkillian.github.io/final-project/scripts/info.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var templedata = request.response;
    showTempleInfo(templedata);

}

function showTempleInfo(jsonObj){

    temples = jsonObj["temples"];

    for (templesindex = 0; templesindex < temples.length; templesindex++){

        if (temples[templesindex].name == "Payson")
        populateTempleInfo(temples[templesindex]);


    }

}

function populateTempleInfo(jsonObj){

    var temple = jsonObj;

    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var mypara1 = document.createElement("p");
    var mypara2 = document.createElement("p");
    var mypara3 = document.createElement("p");
    var mypara4 = document.createElement("p");
    var mypara5 = document.createElement("p");
    var mypara6 = document.createElement("p");
    var mypara7 = document.createElement("p");
    var mypara8 = document.createElement("p");
 

    myH2.textContent = temple.information;
    mypara1.textContent = "Address: " + temple.address;
    mypara2.textContent = "Telephone: " + temple.telephone;
    mypara3.textContent = "Email: " + temple.email;
    mypara4.textContent = "Services: " + temple.services;
    mypara5.textContent = "History: " + temple.milestones;
    mypara6.textContent = "Ordinance Schedule: " + temple.ordinanceSchedule;
    mypara7.textContent = "Endowment Sessions: " + temple.endowmentSchedule;
    mypara8.textContent = "Closure Dates: " + temple.templeClosure;


    myArticle.appendChild(myH2);
    myArticle.appendChild(mypara1);
    myArticle.appendChild(mypara2);
    myArticle.appendChild(mypara3);
    myArticle.appendChild(mypara4);
    myArticle.appendChild(mypara5);
    myArticle.appendChild(mypara6);
    myArticle.appendChild(mypara7);
    myArticle.appendChild(mypara8);
    myArticle.className = "tempinfo";

    article.appendChild(myArticle);


}