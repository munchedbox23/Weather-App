const time = (timeSelector) => {
  const date = document.getElementById(timeSelector);

  function getZero(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function getDateTime() {
    const nowDate = new Date(),
          hours = getZero(nowDate.getHours()),
          minutes = getZero(nowDate.getMinutes());
    
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day.getDay()];
}

export {getHour, getDayName};
export default time;
