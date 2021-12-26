const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); // Date object는 getClock function을 호출하는 당시의 현재 날짜와 시간을 알려줌.
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // padStart()는 string이 가져야하는 길이를 2로 설정하고,
  // 그렇지 않다면 string의 앞쪽에 0을 추가하도록 함.
  clock.innerText = `${year}.${month}.${dates}. ${hours}:${minutes}:${seconds}`;
} // getClock function이 하고 있는 것은 그저 현재 시간, 분, 초를 표시하는 것뿐임.

getClock(); //website가 load되자마자 getClock()을 즉시 호출하고,
setInterval(getClock, 1000); // 매초마다 반복되도록 함.
// setInerval()함수는 시간이 실시간으로 보이게 함.
