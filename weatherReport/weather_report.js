 function showWeatherDetails(event) {
            event.preventDefault(); // Prevent form from refreshing the page
            
            const city = document.getElementById('city').value.trim(); // Get city input value
            
            if (!city) {
                alert("Please enter a city name!");
                return;
            }

            const apiKey = 'ddb7a6b7f3da7d6a40994e1a19cc9fd9'; // Your API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            // Fetch weather data
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("City not found!");
                    }
                    return response.json();
                })
                .then(data => {
                    const weatherInfo = document.getElementById('weatherInfo');
                    weatherInfo.innerHTML = `
                        <h2>Weather in ${data.name}</h2>
                        <p>Temperature: ${data.main.temp} &#8451;</p>
                        <p>Weather: ${data.weather[0].description}</p>
                    `;
                })
                .catch(error => {
                   console.error('Error fetching weather:', error);
                   const weatherInfo = document.getElementById('weatherInfo');
                   weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
                });
        }

        document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);