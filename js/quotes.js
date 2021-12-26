const quotes = [
  {
    quote: "Where there is no desire, there will be no industry.",
    korean: "욕망이 없는 곳에는 근면도 없다.",
  },
  {
    quote: "We give advice, but we cannot give conduct.",
    korean: "충고는 해 줄 수 있으나, 행동하게 할 수는 없다.",
  },
  {
    quote: "All fortune is to be conquered by bearing it.",
    korean: "모든 운명은 그것을 인내함으로써 극복해야 한다.",
  },
  {
    quote: "Envy and wrath shorten the life.",
    korean: "시기와 분노는 수명을 단축시킨다.",
  },
  {
    quote: "Who knows much believes the less.",
    korean: "많이 아는 사람일수록 적게 믿는다.",
  },
  {
    quote:
      "A man that hath no virtue in himself, ever envieth virtue in others.",
    korean: "자기에게 덕이 없는 자는 타인의 덕을 시기한다",
  },
  {
    quote: "Who begins too much accomplishes little.",
    korean: "너무 많이 시작하는 사람은 성취하는 것이 별로 없다.",
  },
  {
    quote: "Let thy speech be short, comprehending much in few words.",
    korean: "몇 마디 말에 많은 뜻을 담고, 말은 간단히 하라.",
  },
  {
    quote: "The will of a man is his happiness.",
    korean: "인간의 마음가짐이 곧 행복이다.",
  },
  {
    quote: "Books are ships which pass through the vast seas of time.",
    korean: "책이란 넓고 넓은 시간의 바다를 지나가는 배다.",
  },
];

const quote = document.querySelector("#quote span:first-child");
const korean = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
// 이거 전부가 숫자(number)가 된다.

quote.innerText = todaysQuote.quote;
korean.innerText = todaysQuote.korean;
