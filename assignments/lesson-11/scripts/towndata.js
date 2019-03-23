
      var section = document.querySelector('section');
      var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      request.onload = function() {
      var secdata = request.response;
      
      popdata(secdata);
      }
      
      

      function popdata(jsonObj) {
      var itdata = jsonObj['towns'];
      
      
      for (i = 0; i < itdata.length; i++) {
          var name = itdata[i].name;
          if ((name.includes("Preston") || name.includes("Soda Springs") || name.includes("Fish Haven")) == false) {
              continue;
          }
           
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var paraimg = document.createElement('img');

      myH2.textContent = itdata[i].name;
      myPara1.textContent = itdata[i].motto;
      myPara2.textContent = 'year founded: ' + itdata[i].yearFounded;
      myPara3.textContent = 'current population: ' + itdata[i].currentPopulation;
      myPara4.textContent = 'average rainfall: ' + itdata[i].averageRainfall;

       if (name.includes("Preston")) {

        paraimg.src='images/res2.jpg'; paraimg.setAttribute("alt","Rope swing at resevoir");

       }

       if (name.includes("Soda Springs")) {

        paraimg.src="images/springs.jpg";paraimg.setAttribute("alt","Daniels Springs");

       }

       if (name.includes("Fish Haven")) {

        paraimg.src="images/canoes.jpg";paraimg.setAttribute("alt","Canoeing");

       }

       

      
        
      

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(paraimg);

      section.appendChild(myArticle);
      }
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFpbm9uIiwiYSI6ImNqdGtzZXJiajJ6YW00MG11MzB1MXMxNzEifQ.6lhJiRWvvXxU4zmhHXrMfg';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-111.8766, 42.0963],
    zoom: 12
    });