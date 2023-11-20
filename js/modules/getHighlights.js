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
      uvText.innerText = "Low";
    } else if (uvIndex <= 5) {
      uvText.innerText = "Moderate";
    } else if (uvIndex <= 7) {
      uvText.innerText = "High";
    } else if (uvIndex <= 10) {
      uvText.innerText = "Very High";
    } else {
      uvText.innerText = "Extreme";
    }
  }

  function getHumidityStatus(humidity) {
    if (humidity <= 30) {
      humidityStatus.innerText = "Low";
    } else if (humidity <= 60) {
      humidityStatus.innerText = "Moderate";
    } else {
      humidityStatus.innerText = "High";
    }
  }

  function getVisivilityStatus (visibility) {
    if (visibility <= 0.03) {
      visibilityStatus.innerText = "Dense fog";
    } else if (visibility <= 0.16) {
      visibilityStatus.innerText = "Moderate fog";
    } else if (visibility <= 0.35) {
      visibilityStatus.innerText = "Light fog";
    } else if (visibility <= 1.13) {
      visibilityStatus.innerText = "Very light fog";
    } else if (visibility <= 2.16) {
      visibilityStatus.innerText = "Light haze";
    } else if (visibility <= 5.4) {
      visibilityStatus.innerText = "A faint haze";
    } else if (visibility <= 10.8) {
      visibilityStatus.innerText = "Clear sky";
    } else {
      visibilityStatus.innerText = "The purest sky";
    }
  }

  function getAirQualityStatus(airQuality) {
    if (airQuality <= 50) {
      airQualityStatus.innerText = "Good👌";
    } else if (airQuality <= 100) {
      airQualityStatus.innerText = "Moderate😐";
    } else if (airQuality <= 150) {
      airQualityStatus.innerText = "Harmful to sensitive groups😷";
    } else if (airQuality <= 200) {
      airQualityStatus.innerText = "Unhealthy😷";
    } else if (airQuality <= 250) {
      airQualityStatus.innerText = "Very harmful to health😨";
    } else {
      airQualityStatus.innerText = "Harmful😱";
    }
  }

 
  
};

export default getHighlights;
