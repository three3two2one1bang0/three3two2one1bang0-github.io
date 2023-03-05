const API_KEY = "384e5611e5bd2cf87bfd743cc1e64069";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      // const city = document.querySelector("#weather span:last-child"); -> 사는 지역 나타내기

      // city.innerText = data.name;    -> 사는 지역 나타내기
      weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("Where are you now..? i'cant find you😢");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
