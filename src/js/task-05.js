const refs = {
    input: document.querySelector('#name-input'),
    spanText: document.querySelector('#name-output')
}
refs.input.addEventListener('input', inputChange)
function inputChange(event) {
    if (event.currentTarget.value === "") {
    refs.spanText.textContent = "Anonymous"
    } else {
        refs.spanText.textContent = event.currentTarget.value;
    }
}