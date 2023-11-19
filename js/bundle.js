/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/changeImages.js":
/*!************************************!*\
  !*** ./js/modules/changeImages.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeBackground: () => (/* binding */ changeBackground),
/* harmony export */   getIcon: () => (/* binding */ getIcon)
/* harmony export */ });
function getIcon(condition) {
  if (condition === "partly-cloudy-day") {
    return "assets/icons/sun/27.png";
  } else if (condition === "partly-cloudy-night") {
    return "assets/icons/moon/15.png";
  } else if (condition === "rain") {
    return "assets/icons/rain/39.png";
  } else if (condition === "clear-day") {
    return "assets/icons/sun/26.png";
  } else if (condition === "clear-night") {
    return "assets/icons/moon/10.png";
  } else {
    return "assets/icons/sun/26.png";
  }
}
function changeBackground(condition) {
  const body = document.querySelector("body");
  let bg = "";
  if (condition === "partly-cloudy-day") {
    bg = "assets/images/pc.jpg";
  } else if (condition === "partly-cloudy-night") {
    bg = "assets/images/pcn.jpg";
  } else if (condition === "rain") {
    bg = "assets/images/rain.jpg";
  } else if (condition === "clear-day") {
    bg = "assets/images/cd.jpg";
  } else if (condition === "clear-night") {
    bg = "assets/images/cn.jpg";
  } else {
    bg = "assets/images/pc.jpg";
  }
  body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${bg})`;
}


/***/ }),

/***/ "./js/modules/getHighlights.js":
/*!*************************************!*\
  !*** ./js/modules/getHighlights.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./js/modules/time.js");

const getHighlights = todayData => {
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
  sunRise.innerText = (0,_time__WEBPACK_IMPORTED_MODULE_0__.getHour)(currentDay.sunrise);
  sunSet.innerText = (0,_time__WEBPACK_IMPORTED_MODULE_0__.getHour)(currentDay.sunset);
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
  function getVisivilityStatus(visibility) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHighlights);

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
/* harmony import */ var _getHighlights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHighlights */ "./js/modules/getHighlights.js");
/* harmony import */ var _changeImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeImages */ "./js/modules/changeImages.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time */ "./js/modules/time.js");




const main = () => {
  const temp = document.getElementById("temp"),
    condition = document.getElementById("condition"),
    rain = document.getElementById("rain"),
    mainIcon = document.getElementById("icon"),
    currentLocation = document.getElementById("location"),
    searchForm = document.querySelector(".search"),
    search = document.getElementById("query"),
    celciusBtn = document.querySelector(".celcius"),
    fahrenheitBtn = document.querySelector(".fahrenheit"),
    tempUnit = document.querySelectorAll("#temp-unit"),
    hourlyBtn = document.querySelector(".hourly"),
    weekBtn = document.querySelector(".week"),
    weatherCards = document.querySelector("#weather-cards");
  let currentCity = "";
  let currentUnit = "c";
  let hourlyorWeek = "week";
  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getPublicIp)().then(data => {
    currentCity = data.city;
    getWeather(data.city, currentUnit, hourlyorWeek);
  }).catch(e => {
    console.error(e);
  });
  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getPublicIp)();
  function getWeather(city, unit, hourlyorWeek) {
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(city).then(data => {
      let today = data.currentConditions;
      if (unit === 'c') {
        temp.innerText = today.temp;
      } else {
        temp.innerText = fromCelciusToFahrenheit(today.temp);
      }
      currentLocation.innerText = data.resolvedAddress;
      condition.innerText = today.conditions;
      rain.innerText = "Perc - " + (today.precip === null ? 0 : today.precip) + "%";
      mainIcon.src = (0,_changeImages__WEBPACK_IMPORTED_MODULE_2__.getIcon)(today.icon);
      (0,_changeImages__WEBPACK_IMPORTED_MODULE_2__.changeBackground)(today.icon);
      (0,_getHighlights__WEBPACK_IMPORTED_MODULE_1__["default"])(data.currentConditions);
      if (hourlyorWeek === 'hourly') {
        updateForecast(data.days[0].hours, unit, "day");
      } else {
        updateForecast(data.days, unit, "week");
      }
    }).catch(e => {
      alert("City not found in our database");
    });
  }
  function fromCelciusToFahrenheit(temp) {
    return (temp * 9 / 5 + 32).toFixed(1);
  }
  function updateForecast(data, unit, type) {
    weatherCards.innerHTML = "";
    let day = 0;
    let numCards = 0;
    if (type === "day") {
      numCards = 24;
    } else {
      numCards = 7;
    }
    for (let i = 0; i < numCards; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let dayName = (0,_time__WEBPACK_IMPORTED_MODULE_3__.getHour)(data[day].datetime);
      if (type === "week") {
        dayName = (0,_time__WEBPACK_IMPORTED_MODULE_3__.getDayName)(data[day].datetime);
      }
      let dayTemp = data[day].temp;
      if (unit === "f") {
        dayTemp = fromCelciusToFahrenheit(data[day].temp);
      }
      let iconCondition = data[day].icon;
      let iconSrc = (0,_changeImages__WEBPACK_IMPORTED_MODULE_2__.getIcon)(iconCondition);
      let tempUnit = "°C";
      if (unit === "f") {
        tempUnit = "°F";
      }
      card.innerHTML = `
        <h2 class="day-name">${dayName}</h2>
    <div class="card-icon">
      <img src="${iconSrc}" class="day-icon" alt="" />
    </div>
    <div class="day-temp">
      <h2 class="temp">${dayTemp}</h2>
      <span class="temp-unit">${tempUnit}</span>
    </div>
  `;
      weatherCards.appendChild(card);
      day++;
    }
  }
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    let location = search.value;
    if (location) {
      currentCity = location;
      getWeather(location, currentUnit, hourlyorWeek);
      search.value = '';
    }
  });
  fahrenheitBtn.addEventListener("click", () => {
    changeUnit("f");
  });
  celciusBtn.addEventListener("click", () => {
    changeUnit("c");
  });
  function changeUnit(unit) {
    if (currentUnit !== unit) {
      currentUnit = unit;
      tempUnit.forEach(elem => {
        elem.innerText = `°${unit.toUpperCase()}`;
      });
      if (unit === "c") {
        celciusBtn.classList.add("active");
        fahrenheitBtn.classList.remove("active");
      } else {
        celciusBtn.classList.remove("active");
        fahrenheitBtn.classList.add("active");
      }
      getWeather(currentCity, currentUnit, hourlyorWeek);
    }
  }
  hourlyBtn.addEventListener("click", () => {
    changeTimeSpan("hourly");
  });
  weekBtn.addEventListener("click", () => {
    changeTimeSpan("week");
  });
  function changeTimeSpan(unit) {
    if (hourlyorWeek !== unit) {
      hourlyorWeek = unit;
      if (unit === "hourly") {
        hourlyBtn.classList.add("active");
        weekBtn.classList.remove("active");
        document.body.style.backgroundSize = '100% 200%';
      } else {
        hourlyBtn.classList.remove("active");
        weekBtn.classList.add("active");
        document.body.style.backgroundSize = '100% 100%';
      }
      getWeather(currentCity, currentUnit, hourlyorWeek);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ "./js/modules/time.js":
/*!****************************!*\
  !*** ./js/modules/time.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayName: () => (/* binding */ getDayName),
/* harmony export */   getHour: () => (/* binding */ getHour)
/* harmony export */ });
const time = timeSelector => {
  const date = document.getElementById(timeSelector);
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function getDateTime() {
    const nowDate = new Date(),
      hours = getZero(nowDate.getHours()),
      minutes = getZero(nowDate.getMinutes());
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `${weekDays[nowDate.getDay()]}, ${hours}:${minutes}`;
  }
  date.innerText = getDateTime();
  setInterval(() => {
    date.innerText = getDateTime();
  }, 1000);
};
function getHour(time) {
  let hour = time.split(":")[0];
  let minute = time.split(":")[1];
  return `${hour}:${minute}`;
}
function getDayName(date) {
  let day = new Date(date);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[day.getDay()];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (time);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPublicIp: () => (/* binding */ getPublicIp),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
async function getPublicIp() {
  const res = await fetch('https://geolocation-db.com/json/', {
    method: 'GET',
    headers: {}
  });
  if (!res.ok) {
    throw new Error('Oops! Your url is invalid :(');
  }
  return res.json();
}
async function getWeatherData(city) {
  const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`, {
    method: "GET",
    headers: {}
  });
  return res.json();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/time */ "./js/modules/time.js");
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main */ "./js/modules/main.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_time__WEBPACK_IMPORTED_MODULE_0__["default"])('date-time');
  (0,_modules_main__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map