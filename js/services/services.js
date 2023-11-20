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

/* 3WLF3FWUMFLQS3L2NMSUENS86 */

/* EJ6UBL2JEQGYB3AA4ENASN62J */

async function getWeatherData(city) {
  const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=3WLF3FWUMFLQS3L2NMSUENS86&contentType=json`,
  {
    method: "GET",
    headers: {},
  })

  return res.json();
}


export {getPublicIp, getWeatherData};
