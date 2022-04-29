const inputRefs = document.querySelector('#font-size-control')
const textRefs = document.querySelector('#text')
inputRefs.addEventListener('input', changeFontSize)
function changeFontSize() {
    textRefs.style.fontSize = `${inputRefs.value}px`;
};