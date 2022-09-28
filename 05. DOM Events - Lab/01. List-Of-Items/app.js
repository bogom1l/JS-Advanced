function addItem() {
    
    let newItemValue = document.getElementById('newItemText').value;
    //console.log(newItemValue);

    let liItem = document.createElement('li');
    liItem.textContent = newItemValue;

    let ulItem = document.getElementById('items');
    ulItem.appendChild(liItem);
}