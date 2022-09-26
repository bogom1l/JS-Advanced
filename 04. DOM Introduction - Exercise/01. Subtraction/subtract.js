function subtract() {
    let firstElement = Number(document.getElementById('firstNumber').value);
    let secondElement = Number(document.getElementById('secondNumber').value);

    let result = firstElement - secondElement;

    document.getElementById('result').innerText = result;
}