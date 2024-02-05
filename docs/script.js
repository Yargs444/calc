const TITLE = "calc";
console.log(`[${TITLE}] init`);

const rotateDelay = 50;
console.log(`[${TITLE}] rotateDelay`, rotateDelay);

rotateBackground(false);

const display = document.getElementById("displaySpan");
console.log(`[${TITLE}] display`, display);

let usedDot = false;

function rotateBackground(log = false) {
  const body = document.querySelector("body");
  if (log) console.log(`[${TITLE}#rotateBackground] body`, body);

  const lastDeg = Number(localStorage.getItem("lastDeg") || '0');
  if (log) console.log(`[${TITLE}#rotateBackground] lastDeg`, lastDeg);

  const newDeg = lastDeg + 1 > 360 ? 0 : lastDeg + 1;
  if (log) console.log(`[${TITLE}#rotateBackground] newDeg`, newDeg);

  localStorage.setItem("lastDeg", newDeg);

  body.style.background = `linear-gradient(${newDeg}deg, var(--tertiary), var(--danger))`;

  setTimeout(() => {
    rotateBackground(log);
  }, rotateDelay);
}

function openSource() {
  console.log(`[${TITLE}#openSource]`);

  window.open("https://github.com/dudushy/calc");
}

function clearDisplay() {
  console.log(`[${TITLE}#clear] display.innerText`, display.innerText);

  display.innerText = "0";
}

function dot() {
  console.log(`[${TITLE}#dot] usedDot`, usedDot);
  if (display.innerText.includes(".")) return;
  else if (usedDot) return;

  display.innerText += ".";
  usedDot = true;
}

function appendNumber(number) {
  console.log(`[${TITLE}#appendNumber] number`, number);

  if (display.innerText == "0" && number == "0") return;
  else if (display.innerText == "0") display.innerText = number;
  else display.innerText += number;
}

function deleteLast() {
  console.log(`[${TITLE}#deleteLast] display.innerText`, display.innerText);

  if (display.innerText.length == 1) display.innerText = "0";
  else display.innerText = display.innerText.slice(0, -1);
}

function invert() {
  console.log(`[${TITLE}#invert] display.innerText`, display.innerText);

  display.innerText = Number(display.innerText) * -1;
}
