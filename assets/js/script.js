var city = document.getElementById("cityInput");
var searchEl = document.getElementById("searchBtn");
var currentCity = document.getElementById("currentCity");
var state = document.getElementById("")
var zippoURL = ("http://api.zippopotam.us/us/" + state + "/" + city)
var crimeURL = "https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip" + zipcode;

searchEl.addEventListener("click",function(){
    city = cityInput.value;
    state = stateInput.value;
    getZipcode(state, city);
})

function getZipcode(state,city){
    fetch(zippoURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var zipcode = data.places[1]["post code"];
        console.log(zipcode);
        getCrime(zipcode);
    })
}

// function getCrimeMain(zipCode) {
//     currentCity.innerHTML = "https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip" + zipcode;

//     fetch(crimeURL)
//     .then(function(response){
//         console.log(crimeURL);
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//         getCrime(zipcode);
//     })
// }

// fetch("https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=94109")
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));