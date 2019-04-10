function menuToggle() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("todaysdate").innerHTML = weekday[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " +d.getFullYear();
