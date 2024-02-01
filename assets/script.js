async function fetchCurrentWeather(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        var response = await fetch(apiUrl);
        var data = await response.json();
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
