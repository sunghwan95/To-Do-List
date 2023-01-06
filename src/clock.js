const yearMonthDate = document.querySelector(".date h1");
const clock = document.querySelector(".clock h1");

function updateClock() {
  const nowDate = new Date();

  const year = nowDate.getFullYear();
  const month = String(nowDate.getMonth() + 1).padStart(2, "0");
  const date = String(nowDate.getDate()).padStart(2, "0");
  const hour = String(nowDate.getHours()).padStart(2, "0");
  const min = String(nowDate.getMinutes()).padStart(2, "0");

  yearMonthDate.innerText = `${year}년 ${month}월 ${date}일`;

  if (parseInt(hour) < 12) {
    clock.innerText = `오전 ${hour}시 ${min}분`;
  } else if (parseInt(hour) === 12) {
    clock.innerText = `오후 ${hour}시 ${min}분`;
  } else {
    clock.innerText = `오후 ${String(parseInt(hour) - 12).padStart(
      2,
      "0"
    )}시 ${min}분`;
  }
}

updateClock();
setInterval(updateClock, 1000);
