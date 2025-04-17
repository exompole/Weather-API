import axios from 'axios';

const getWeatherData = async (city) => {
  const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
  return res.data;
};

export default getWeatherData;
