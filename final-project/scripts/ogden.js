mapboxgl.accessToken = 'pk.eyJ1IjoiZGFpbm9uIiwiYSI6ImNqdGtzZXJiajJ6YW00MG11MzB1MXMxNzEifQ.6lhJiRWvvXxU4zmhHXrMfg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-111.971342, 41.227558],
zoom: 13
});

let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', "https://api.openweathermap.org/data/2.5/weather?zip=84401&units=imperial&APPID=86ba4d2c72ca8e279c8006007e3ef735", true);
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
    TempleInfo(templedata);

}

function TempleInfo(jsonObj) {
    var data = jsonObj['temples'];
     for (i = 0; i < data.length; i++) {
        var name = data[i].name;
        if ((name.includes("Ogden")) == false) {
        continue;
    }       
    var tempName=document.createElement('h2');
    tempName.textContent=data[i].name;
    var tempAddress=document.createElement('p');    
    tempAddress.textContent="address: " + data[i].address;
    var tempCity=document.createElement('p');    
    tempCity.textContent=data[i].state;
    var tempTel=document.createElement('p');    
    tempTel.textContent="telephone: " + data[i].telephone;
    var tempMail=document.createElement('p');    
    tempMail.textContent="email: " + data[i].email;
    

    var tempServ = data[i].services; 
    var myArticle = document.createElement('article');
    var servHead =document.createElement('h3')
    var servList = document.createElement('ul');
    servHead.textContent="Services";
    for (var j = 0; j < tempServ.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = tempServ[j];
        servList.appendChild(listItem);
    } 

    var tempMile = data[i].milestones;     
    var mileHead =document.createElement('h3')
    var mileList = document.createElement('ul');
    mileHead.textContent="Milestones";
    for (var j = 0; j < tempMile.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = tempMile[j];
        mileList.appendChild(listItem);
    } 

    var tempOrdinance = data[i].ordinanceSchedule;     
    var ordinanceHead =document.createElement('h3')
    var ordinanceList = document.createElement('ul');
    ordinanceHead.textContent="Ordinance Schedule";
    for (var j = 0; j < tempOrdinance.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = tempOrdinance[j];
        ordinanceList.appendChild(listItem);
    } 

    var tempEndowment = data[i].endowmentSchedule;     
    var endowmentHead =document.createElement('h3')
    var endowmentList = document.createElement('ul');
    endowmentHead.textContent="Endowment Schedule";
    for (var j = 0; j < tempEndowment.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = tempEndowment[j];
        endowmentList.appendChild(listItem);
    } 

    var tempClosure = data[i].templeClosure;     
    var closureHead =document.createElement('h3')
    var closureList = document.createElement('ul');
    closureHead.textContent="Temple Closures";
    for (var j = 0; j < tempClosure.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = tempClosure[j];
        closureList.appendChild(listItem);
    } 
    myArticle.appendChild(tempName);
    myArticle.appendChild(tempAddress);
    myArticle.appendChild(tempCity);
    myArticle.appendChild(tempTel);
    myArticle.appendChild(tempMail);


    myArticle.appendChild(servHead);
    myArticle.appendChild(servList);
    myArticle.appendChild(mileHead);
    myArticle.appendChild(mileList);
    myArticle.appendChild(ordinanceHead);
    myArticle.appendChild(ordinanceList);
    myArticle.appendChild(endowmentHead);
    myArticle.appendChild(endowmentList);
    myArticle.appendChild(closureHead);
    myArticle.appendChild(closureList);      
    
     }
    article.appendChild(myArticle);         
        
         
}








