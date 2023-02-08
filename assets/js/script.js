var cityInput = document.getElementById("cityInput");
var stateInput =document.getElementById("stateInput");
var searchEl = document.getElementById("searchBtn");
var currentCity = document.getElementById("currentCity");
var zipcode;

function getZipcode(state,city){
    fetch("http://api.zippopotam.us/us/"+ state + "/" + city)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        zipcode = data.places[0]["post code"];
        console.log(zipcode);
        getCrimemain();
    })
}

function getCrimemain(){
    fetch("https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip="+ zipcode)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.success);
    })
}

function displayCrimemain(){
    currentCity.innerHTML = 
}
searchEl.addEventListener("click",function(){
    city = cityInput.value;
    state = stateInput.value;
    getZipcode(state, city);
})

