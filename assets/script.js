function fetchCurrentWeather(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        var response = fetch(apiUrl);
        var data = response.json();
        return data;
    } catch (error) {
        console.log('Error fetching current weather data:', error);
    }
}


function fetchWeatherForecast(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    try {
        var response = fetch(apiUrl);
        var data = response.json();
        return data;
    } catch (error) {
        console.log('Error fetching weather forecast data:', error);
    }
}

function displayCurrentWeather(data) {
    console.log('Current weather data:', data);
}

function displayWeatherForecast(data) {
    console.log('Weather forecast data:', data);
}
 
var defaultCityName = 'New York';


function handleCitySearch(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
        saveToLocalStorage('lastSearchedCity', cityName);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}
