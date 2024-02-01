async function fetchCurrentWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching current weather data:', error);
    }
}


function fetchWeatherForecast(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
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

const cityName = 'YOUR_CITY_NAME';
handleCitySearch(cityName);

