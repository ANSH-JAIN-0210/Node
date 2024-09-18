const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', async (req, res) => {
    const city = encodeURIComponent(req.query.city);
    const apikey = '492f8dbd5988f518edc529d919332481'; 

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);
        const weatherData = response.data;
        const weatherInfo = {
            temp: weatherData.main.temp,
            description: weatherData.weather[0].description
        };
        res.json(weatherInfo);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.json({ error: 'City not found or API error!' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
