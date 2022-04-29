const inputRefs = document.querySelector('#validation-input')

inputRefs.addEventListener('blur', onChangeBorderColor)
function onChangeBorderColor(event) {
    const inputData = event.currentTarget.dataset.length;
    const inputLength = String(event.currentTarget.value.length);
    
    if (inputData === inputLength) {
        inputRefs.classList.add('valid')
        inputRefs.classList.remove('invalid')
    } else {
        inputRefs.classList.add('invalid')
        inputRefs.classList.remove('valid')
    }
    }