const API_KEY = "c4ac9e215d823484996f00116cff0a6a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = `나의 위치: ${data.name}`;
      weather.innerText = `날씨: ${data.weather[0].main} / 온도: ${data.main.temp}°C`;
    }); // url을 부르는 방법. 웹문서 검사에서 network에서 확인할 수 있음.
  // 자바스크립트에서 URL로 요청함.
} // 위치를 얻는데 성공했을 때
function onGeoError() {
  alert("can't find you. No weather for you");
} // 만약 user가 위치 받는게 불가능할 때

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
