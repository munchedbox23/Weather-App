import { getHour } from "./time";

const getHighlights = (todayData) => {
  const uvIndex = document.querySelector(".uv-index"),
        uvText = document.querySelector(".uv-text"),
        windSpeed = document.querySelector(".wind-speed"),
        sunRise = document.querySelector(".sun-rise"),
        sunSet = document.querySelector(".sun-set"),
        humidity = document.querySelector(".humidity"),
        humidityStatus = document.querySelector('.humidity-status'),
        visibility = document.querySelector(".visibility"),
        airQuality = document.querySelector(".air-quality"),
        airQualityStatus = document.querySelector(".air-quality-status"),
        visibilityStatus = document.querySelector(".visibility-status");
  

  let currentDay = todayData;

  uvIndex.innerText = currentDay.uvindex;
  getUvStatus(currentDay.uvindex);
  windSpeed.innerText = currentDay.windspeed;
  humidity.innerText = currentDay.humidity;
  getHumidityStatus(currentDay.humidity);
  airQuality.innerText = currentDay.winddir;
  getAirQualityStatus(currentDay.winddir);
  visibility.innerText = currentDay.visibility === null ? 0 : currentDay.visibility;
  getVisivilityStatus(currentDay.visibility);
  sunRise.innerText = getHour(currentDay.sunrise);
  sunSet.innerText = getHour(currentDay.sunset);

  function getUvStatus(uvIndex) {
    if (uvIndex <= 2) {
      uvText.innerText = "Низкий";
    } else if (uvIndex <= 5) {
      uvText.innerText = "Умеренный";
    } else if (uvIndex <= 7) {
      uvText.innerText = "Высокий";
    } else if (uvIndex <= 10) {
      uvText.innerText = "Очень Высокий";
    } else {
      uvText.innerText = "Экстремальный";
    }
  }

  function getHumidityStatus(humidity) {
    if (humidity <= 30) {
      humidityStatus.innerText = "Низкая";
    } else if (humidity <= 60) {
      humidityStatus.innerText = "Умеренная";
    } else {
      humidityStatus.innerText = "Высокая";
    }
  }

  function getVisivilityStatus (visibility) {
    if (visibility <= 0.03) {
      visibilityStatus.innerText = "Густой туман";
    } else if (visibility <= 0.16) {
      visibilityStatus.innerText = "Умеренный туман";
    } else if (visibility <= 0.35) {
      visibilityStatus.innerText = "Легкий туман";
    } else if (visibility <= 1.13) {
      visibilityStatus.innerText = "Очень слабый туман";
    } else if (visibility <= 2.16) {
      visibilityStatus.innerText = "Легкая дымка";
    } else if (visibility <= 5.4) {
      visibilityStatus.innerText = "Слабая дымка";
    } else if (visibility <= 10.8) {
      visibilityStatus.innerText = "Чистое небо";
    } else {
      visibilityStatus.innerText = "Чистейшее небо";
    }
  }

  function getAirQualityStatus(airQuality) {
    if (airQuality <= 50) {
      airQualityStatus.innerText = "Хорошее👌";
    } else if (airQuality <= 100) {
      airQualityStatus.innerText = "Умеренное😐";
    } else if (airQuality <= 150) {
      airQualityStatus.innerText = "Вредное для чувствительных групп😷";
    } else if (airQuality <= 200) {
      airQualityStatus.innerText = "Нездоровое😷";
    } else if (airQuality <= 250) {
      airQualityStatus.innerText = "Очень вредное для здоровья😨";
    } else {
      airQualityStatus.innerText = "Опасное😱";
    }
  }

 
  
};

export default getHighlights;
