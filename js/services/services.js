async function getPublicIp() {
  const res = await fetch('https://geolocation-db.com/json/', {
    method: 'GET',
    headers: {},
  })
  if(!res.ok) {
    throw new Error('Oops! Your url is invalid :(');
  }

  return res.json();
}


async function getWeatherData(city) {
  const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`,
  {
    method: "GET",
    headers: {},
  })

  return res.json();
}


export {getPublicIp, getWeatherData};
