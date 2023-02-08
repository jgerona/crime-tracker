<<<<<<< HEAD
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

=======

var searchEl = document.getElementById("searchBtn");
var currentCity = document.getElementById("currentCity"); // current searched city card on html
// var crimeUrl = "https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=" + zipcode;

searchEl.addEventListener("click", function(event) {
    var city = document.getElementById("cityInput").value;
    var state = document.getElementById("stateInput").value;
    getZipcode(state,city);
})

function getZipcode(state,city){
    var zippoUrl = "http://api.zippopotam.us/us/" + state +"/"+city;
    fetch(zippoUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var cityName = data["place name"] + ", " + state.toUpperCase();
            for(var i =0; i<5; i++){
                var zipcode = (data.places[i]["post code"]);
                var crimeUrl = "https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=" + zipcode;
                fetch(crimeUrl)
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(data){
                        if(data.success){
                            console.log(data.Overall.Fact);
                            currentCity.innerHTML = cityName;
                            document.getElementById("currentCrimeInfo").innerHTML = data.Overall.Fact;
                        }

                    })
            }
            
        })
}

// function getCrimeMain(zipcode) {
//     //currentCity.innerHTML
//     var crimeUrl = "https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=" + zipcode;
//     fetch(crimeUrl)
//         .then(function(response){
//             console.log(crimeUrl);
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//         })
// }


// fetch(zippoUrl)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })



>>>>>>> 6c16c17482281b6330c8257d6ed344023a737262
// fetch("https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=94109")
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));