# weather-app
# Weather Application

This is a simple and user-friendly weather application built with HTML, CSS, and JavaScript. The app allows users to fetch and display current weather information based on their input (city name or zip code). It includes features like dark mode toggle, responsive design, and detailed weather information.

## Features

- Fetch and display current weather information based on user input.
- Display details such as location, temperature, feels like temperature, min and max temperatures, humidity, wind speed, and weather description.
- Dark mode and light mode toggle functionality.
- Responsive design that works well on various devices (desktop, tablet, mobile).
- Error handling for invalid input or connection issues.

## Screenshots

![Weather App Light Mode](screenshots/light_mode.png)
![Weather App Dark Mode](screenshots/dark_mode.png)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
2.Open the index.html file in your browser.

3.Obtain an API key from OpenWeatherMap.
Usage
1.Open your browser and go to the location where you have the project files.
2.Enter a city name in the input field and click "Search" to fetch the weather information for that city.
3.Use the "Toggle Dark Mode" button to switch between dark mode and light mode.

Project Structure
plaintext
Copy code
weather-app/
├── index.html
├── styles.css
├── script.js
├── .gitignore
├── README.md
└── screenshots/
    ├── light_mode.png
    └── dark_mode.png
Code Overview
index.html
The main HTML file that includes the structure of the application.

styles.css
Styles for the weather application, including responsive design and dark mode styling.

script.js
JavaScript file that handles fetching weather data from the OpenWeatherMap API, displaying the weather information, and toggling dark mode.
