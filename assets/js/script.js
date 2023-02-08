
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



// fetch("https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=94109")
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));