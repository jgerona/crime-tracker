fetch("https://crime-data-by-zipcode-api.p.rapidapi.com/crime_data?zip=94109")
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));