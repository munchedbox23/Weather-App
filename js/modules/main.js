import { getPublicIp, getWeatherData } from "../services/services";
import getHighlights from "./getHighlights";
import { getIcon, changeBackground} from "./changeImages";
import { getHour, getDayName} from "./time";
import checkInput from "./checkInput";

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
        card2 = document.querySelectorAll('.card2'),
        weatherCards = document.querySelector("#weather-cards");
      
  let currentCity = "";
  let currentUnit = "c";
  let hourlyorWeek = "week";

  getPublicIp()
  .then((data) => {
    currentCity = data.city;
    getWeather(data.city, currentUnit, hourlyorWeek);
  })
  .catch((e) => {
    console.error(e);
  });

  getPublicIp();


function getWeather(city, unit, hourlyorWeek) {
  getWeatherData(city)
  .then((data) => {
    animateCards();
    let today = data.currentConditions;
    if(unit === 'c') {
      temp.innerText = today.temp;
    } else {
      temp.innerText = fromCelciusToFahrenheit(today.temp);
    }
    currentLocation.innerText = data.resolvedAddress;
    condition.innerText = today.conditions;
    rain.innerText = "Perc - " + (today.precip === null ? 0 : today.precip) + "%";
    mainIcon.src = getIcon(today.icon);
    changeBackground(today.icon);
    getHighlights(data.currentConditions);
    if(hourlyorWeek === 'hourly') {
      updateForecast(data.days[0].hours, unit, "day");
    } else {
      updateForecast(data.days, unit, "week");
    }
  })
  .catch((e) => {
    alert("City not found in our database");
  })
}

function fromCelciusToFahrenheit(temp) {
  return ((temp * 9) / 5 + 32).toFixed(1);
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
    card.classList.add('animated', 'zoomIn');
    let dayName = getHour(data[day].datetime);
    if (type === "week") {
      dayName = getDayName(data[day].datetime);
    }
    let dayTemp = data[day].temp;
    if (unit === "f") {
      dayTemp = fromCelciusToFahrenheit(data[day].temp);
    }
    let iconCondition = data[day].icon;
    let iconSrc = getIcon(iconCondition);
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

function animateCards() {
  card2.forEach((elem) => {
    if (!elem.classList.contains('animated') ||!elem.classList.contains('zoomIn')) {
      elem.classList.add('animated', 'zoomIn');
      setTimeout(() => {
        elem.classList.remove('animated', 'zoomIn');
      }, 750);
    }
  });
}
checkInput('#query');

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let location = (search.value).trim();
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
    tempUnit.forEach((elem) => {
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
  if (hourlyorWeek!== unit) {
    hourlyorWeek = unit;
    if (unit === "hourly") {
      hourlyBtn.classList.add("active");
      weekBtn.classList.remove("active");
    } else {
      hourlyBtn.classList.remove("active");
      weekBtn.classList.add("active");
    }
    getWeather(currentCity, currentUnit, hourlyorWeek);
    animateCards();
  }
}

};

export default main;
