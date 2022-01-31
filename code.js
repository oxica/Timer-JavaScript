let finalDate = null;
let timerId = null;

document
  .getElementById("countdown-button")
  .addEventListener("click", function () {
    initTimer();
  });

function initTimer() {
  clearInterval(timerId);

  finalDate = document.getElementById("final-date-input").value;
  console.log(finalDate);

  if (finalDate == "") return;
  finalDate = new Date(finalDate);

  document.getElementById("message").style.display = "none";

  timer();
  timerId = setInterval(timer, 1000);
}

function timer() {
  const now = new Date().getTime();

  let interval = (finalDate.getTime() - now) / 1000;
  interval = Math.floor(interval);
  console.log(interval);

  if (interval <= 0) {
    document.getElementById("message").style.display = "block";
    clearInterval(timerId);
    clearTimer();
    return;
  }

  let days = Math.floor(interval / (60 * 60 * 24));
  let hours = Math.floor((interval % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((interval % (60 * 60)) / 60);
  let seconds = Math.floor(interval % 60);

  setHtmlBySelector("#days", days);
  setHtmlBySelector("#hours", hours);
  setHtmlBySelector("#minutes", minutes);
  setHtmlBySelector("#seconds", seconds);
}

function setHtmlBySelector(selector, value) {
  document.querySelector(selector).innerHTML = value;
}

function clearTimer() {
  setHtmlBySelector("#days", "-");
  setHtmlBySelector("#hours", "-");
  setHtmlBySelector("#minutes", "-");
  setHtmlBySelector("#seconds", "-");
}
