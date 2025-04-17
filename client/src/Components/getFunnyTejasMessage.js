import sunnyTejas from '../assets/sunny.jpg';
import rainyTejas from '../assets/rainy.jpg';
import cloudyTejas from '../assets/cloudy.jpg';
import snowyTejas from '../assets/snowy.jpg';
import unknownTejas from '../assets/unknown.jpg';

const getFunnyTejasMessage = (weather) => {
  if (!weather) return { message: '', image: null };

  const condition = weather.weather[0].main.toLowerCase();
  const temp = weather.main.temp;

  if (temp >= 35) {
    return {
      message: "🔥 It's hotter than Tejas' brain after spicy misal!",
      image: sunnyTejas
    };
  }
  if (condition.includes('rain')) {
    return {
      message: "☔ Tejas says: Majbut Paus",
      image: rainyTejas
    };
  }
  if (condition.includes('cloud')) {
    return {
      message: "🌥 Tejas's hair are missing but the clouds are not!",
      image: cloudyTejas
    };
  }
  if (temp <= 10) {
    return {
      message: "❄️ lay ghan dhandi aahe, Tejas is in his blanket!",
      image: snowyTejas
    };
  }

  return {
    message: "🤔 Tejas doesn't know this weather but he's vibing anyway!",
    image: unknownTejas
  };
};

export default getFunnyTejasMessage;
