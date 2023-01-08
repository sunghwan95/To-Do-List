const API_KEY = "fbbe8738db30af945caebee5d0f7de5f";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather h1:first-child");
      const city = document.querySelector(".weather h1:last-child");
      city.innerText = `지역 : ${data.name}`;
      weather.innerText = `날씨 : ${data.weather[0].main}\n온도 : ${data.main.temp}°C`;
    });
}
function geoError() {}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
