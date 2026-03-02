//1

let minutes = 60;
const hourTimer = document.getElementById("hourTimer");
const message = document.getElementById("message");

let hourInterval = setInterval(() => {
  minutes--;
  hourTimer.textContent = minutes + " хв";

  if (minutes === 30) {
    message.textContent = "⚠ Залишилось менше половини часу!";
    message.classList.add("warning");
  }

  if (minutes <= 0) {
    clearInterval(hourInterval);
    hourTimer.textContent = "Час вийшов!";
  }
}, 60000);

//2

const secondTimer = document.getElementById("secondTimer");
const startBtn = document.getElementById("startBtn");

let timeLeft = 30000;
let secondInterval;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  timeLeft = 30000;

  secondInterval = setInterval(() => {
    timeLeft--;

    secondTimer.textContent = (timeLeft / 1000).toFixed(3);

    if (timeLeft === 10000) {
      secondTimer.classList.add("animate");
    }

    if (timeLeft <= 0) {
      clearInterval(secondInterval);
      secondTimer.textContent = "0.000";
      secondTimer.classList.remove("animate");
      startBtn.disabled = false;
    }
  }, 1);
});
