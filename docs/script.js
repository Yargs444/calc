const TITLE = "calc";
console.log(`[${TITLE}] init`);

const rotateDelay = 50;
console.log(`[${TITLE}] rotateDelay`, rotateDelay);

rotateBackground(false);

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
