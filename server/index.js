const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load env variables

const app = express();
app.use(cors());

const PORT = 5000;

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.WEATHER_API_KEY; // Use env variable

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
