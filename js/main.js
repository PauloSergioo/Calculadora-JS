const inputNumber1 = document.querySelector("#number1");
const inputNumber2 = document.querySelector("#number2");

const btnPlus = document.querySelector("#btn-plus");
const btnTimes = document.querySelector("#btn-times");
const btnClear = document.querySelector("#btn-clear");
const resultBox = document.querySelector("#result-box");

btnTimes.addEventListener("click", handleBtnTimesClick);
btnPlus.addEventListener("click", handleBtnPlusClick);
btnClear.addEventListener("click", handleBtnClearClick);

inputNumber1.addEventListener('keypress', HandleKeyPress);
inputNumber2.addEventListener('keypress', HandleKeyPress);


inputNumber1.addEventListener('change', (event) => {
    if (isNaN(Number(inputNumber1.value))) {
        inputNumber1.classList.add('input-error');
    } else {
        inputNumber1.classList.remove('input-error');
    }
});

inputNumber2.addEventListener('change', (event) => {
    if (isNaN(Number(inputNumber2.value))) {
        inputNumber2.classList.add('input-error');
    } else {
        inputNumber2.classList.remove('input-error');
    }
});

function handleBtnPlusClick(event) {

    const n1 = Number(inputNumber1.value);
    const n2 = Number(inputNumber2.value);
    const sum = n1 + n2;
    resultBox.innerHTML = sum;
}

function handleBtnTimesClick(event) {

    const n1 = Number(inputNumber1.value);
    const n2 = Number(inputNumber2.value);
    const multiplication = n1 * n2;
    resultBox.innerHTML = multiplication;
}

function handleBtnClearClick(event) {

    inputNumber1.value = ' ';
    inputNumber2.value = ' ';
    resultBox.innerHTML = 0;
    inputNumber1.classList.remove('input-error');
    inputNumber2.classList.remove('input-error');
}

function HandleKeyPress(event) {
    let theEvent = event;
    let key = event.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regrex = /^[0-9.]+$/;
    if (!regrex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
