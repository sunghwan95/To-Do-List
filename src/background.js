const imgs = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const bgImg = imgs[Math.floor(Math.random() * imgs.length)];
document.body.style.backgroundImage = `url(img/${bgImg})`;
document.body.style.backgroundSize = "100% 100vh";
document.body.style.backgroundRepeat = "no-repeat";
