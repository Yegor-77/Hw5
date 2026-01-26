
// 1 — game 

const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Q"];
let currentKeyIndex = 0;

const keyEl = document.getElementById("key");
const newGameBtn = document.getElementById("new-game");

keyEl.textContent = keys[currentKeyIndex];


document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toUpperCase();

  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;

    if (currentKeyIndex === keys.length) {
      PNotify.success({
        text: "!!nice!! Ви виграли! Усі клавіші натиснуті правильно!",
      });
      currentKeyIndex = 0;
    } else {
      PNotify.success({
        text: `:) Правильно! Натисни "${keys[currentKeyIndex]}"`,
      });
    }

    keyEl.textContent = keys[currentKeyIndex];
  } else {
    PNotify.error({
      text: `X Помилка! Потрібно натиснути "${keys[currentKeyIndex]}"`,
    });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});


newGameBtn.addEventListener("click", () => {
  currentKeyIndex = 0;
  keyEl.textContent = keys[currentKeyIndex];

  PNotify.info({
    text: " Нова гра розпочата!",
  });
});


// ЗАВДАННЯ 2 — та я не розмію як це зробити , там пртеба гравік або я не знаю як то зробити 


// const chartData = 
//   labels: [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",    
//   ]
