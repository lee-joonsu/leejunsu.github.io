const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
// 문서에 저장된 이미지를 image array로 불러옴.
// 폴더 안에 있는 이미지 이름들은 javascript 파일에서도 똑같이 쓰임.

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// javascript에서 이미지를 만들고 이걸 html에 추가함.
bgImage.src = `img/${chosenImage}`; // javascript에서 html element를 생성함.
// 이미지를 선택하고 src로 img 폴더 뒤에 추가해줌.

document.body.appendChild(bgImage);
// 우리가 생성한 bgImage를 body에 append시킴.(추가)
// append는 가장 뒤에, prepend는 가장 웹 문서 맨 위에 추가시키는 것임.