const API_KEY = 'a85f69fae0e0ce413a77da97e39be390';

document.getElementById('search-button').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetchWeather(location);
    }
});

document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    console.log(`Fetching weather for URL: ${url}`); // Log the URL

    fetch(url)
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    console.error('Error response data:', errorData); // Log error response data
                    if (errorData.cod === 401) {
                        throw new Error(`Invalid API key: ${errorData.message}`);
                    } else if (errorData.cod === 404) {
                        throw new Error(`Location not found: ${location}`);
                    } else {
                        throw new Error(`Error: ${errorData.message}`);
                    }
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data received:', data); // Log the received data
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert(error.message);
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = ''; // Clear previous weather data

    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';
    weatherCard.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${new Date().toLocaleString()}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Feels Like: ${data.main.feels_like} °C</p>
        <p>Min Temperature: ${data.main.temp_min} °C</p>
        <p>Max Temperature: ${data.main.temp_max} °C</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
    weatherContainer.appendChild(weatherCard);
}
