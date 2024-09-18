// script.js
document.getElementById('weather-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const resultDiv = document.getElementById('weather-result');

    try {
        const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
        const data = await response.json();

        if (data.error) {
            resultDiv.textContent = data.error;
        } else {
            resultDiv.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${data.temp} °C</p>
                <p>Description: ${data.description}</p>
            `;
        }
    } catch (error) {
        resultDiv.textContent = 'Error fetching weather data.';
    }
});
