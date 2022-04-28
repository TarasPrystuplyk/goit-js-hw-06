

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color')
const textColorEl = document.querySelector('.color')

buttonEl.addEventListener('click', changeColor)
function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  textColorEl.textContent = newColor;
}
