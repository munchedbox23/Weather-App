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


export {getIcon, changeBackground};
