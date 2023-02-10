var searchEl = document.getElementById("searchBtn");
var currentCity = document.getElementById("currentCity"); // current searched city card on html
// var crimeUrl = "https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=" + zipcode;
var cityName;

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

            cityName = data["place name"] + ", " + state.toUpperCase();

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

    document.getElementById("currentCrimeInfo1").innerHTML = "Overall crime grade: " + data.Overall["Overall Crime Grade"];
    document.getElementById("currentCrimeInfo2").innerHTML = "Violent crime grade: " + data.Overall["Violent Crime Grade"];
    document.getElementById("currentCrimeInfo3").innerHTML = "Property Crime Grade:  " + data.Overall["Property Crime Grade"];
    fillCont1(data);
    fillCont2(data);
    fillCont3(data);
    fillCont4(data);
    fillCont5(data);
    fillCont6(data);
                }
                })
            }
        })
}

function fillCont1(data){
    document.getElementById("nearbyCity1").innerHTML = data["Crime Rates Nearby"][0]['Nearby Zip'];
document.getElementById("info1").innerHTML = "Overall Crime Grade: " + data["Crime Rates Nearby"][0]['Overall Crime Grade'];
document.getElementById("info2").innerHTML = "Violent Crime Grade: " + data["Crime Rates Nearby"][0]["Violent Crime Grade"];
document.getElementById("info3").innerHTML = "Property Crime Grade: " + data['Crime Rates Nearby'][0]['Property Crime Grade'];
}

function fillCont2(data){
    document.getElementById("nearbyCity2").innerHTML = data["Crime Rates Nearby"][1]['Nearby Zip'];
document.getElementById("info4").innerHTML = "Overall Crime Grade: " + data["Crime Rates Nearby"][1]['Overall Crime Grade'];
document.getElementById("info5").innerHTML = "Violent Crime Grade: " + data["Crime Rates Nearby"][1]["Violent Crime Grade"];
document.getElementById("info6").innerHTML = "Property Crime Grade: " + data['Crime Rates Nearby'][1]['Property Crime Grade'];
}

function fillCont3(data){
    document.getElementById("nearbyCity3").innerHTML = data["Crime Rates Nearby"][2]['Nearby Zip'];
document.getElementById("info7").innerHTML = "Overall Crime Grade: " + data["Crime Rates Nearby"][2]['Overall Crime Grade'];
document.getElementById("info8").innerHTML = "Violent Crime Grade: " + data["Crime Rates Nearby"][2]["Violent Crime Grade"];
document.getElementById("info9").innerHTML = "Property Crime Grade: " + data['Crime Rates Nearby'][2]['Property Crime Grade'];
}

function fillCont4(data){
    document.getElementById("nearbyCity4").innerHTML = data["Crime Rates Nearby"][3]['Nearby Zip'];
document.getElementById("info10").innerHTML = "Overall Crime Grade: " + data["Crime Rates Nearby"][3]['Overall Crime Grade'];
document.getElementById("info11").innerHTML = "Violent Crime Grade: " + data["Crime Rates Nearby"][3]["Violent Crime Grade"];
document.getElementById("info12").innerHTML = "Property Crime Grade: " + data['Crime Rates Nearby'][3]['Property Crime Grade'];
}


function fillCont5(data){
    document.getElementById("nearbyCity5").innerHTML = data["Crime Rates Nearby"][4]['Nearby Zip'];
document.getElementById("info13").innerHTML = "Overall Crime Grade: " + data["Crime Rates Nearby"][4]['Overall Crime Grade'];
document.getElementById("info14").innerHTML = "Violent Crime Grade: " + data["Crime Rates Nearby"][4]["Violent Crime Grade"];
document.getElementById("info15").innerHTML = "Property Crime Grade: " + data['Crime Rates Nearby'][4]['Property Crime Grade'];
}

function fillCont6(data){
    document.getElementById("nearbyCity6").innerHTML = data["Crime Rates Nearby"][5]['Nearby Zip'];
document.getElementById("info16").innerHTML = "Overall Crime Grade: " + data["Crime Rates Nearby"][5]['Overall Crime Grade'];
document.getElementById("info17").innerHTML = "Violent Crime Grade: " + data["Crime Rates Nearby"][5]["Violent Crime Grade"];
document.getElementById("info18").innerHTML = "Property Crime Grade: " + data['Crime Rates Nearby'][5]['Property Crime Grade'];
}

