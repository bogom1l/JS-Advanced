function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = inputText.value;
    option.value = inputValue.value;

    let selectMenu = document.getElementById('menu');
    selectMenu.appendChild(option);

    inputText.value = '';
    inputValue.value = '';
}