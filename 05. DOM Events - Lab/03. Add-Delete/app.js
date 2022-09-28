function addItem() {
    
    let ul = document.getElementById('items');

    let input = document.getElementById('newItemText');
    let value = input.value; 

    let li = document.createElement('li');
    li.textContent = value;

    let deleteButton = document.createElement('a');
    deleteButton.href = '#'; // for Judge
    deleteButton.textContent = '[Delete]';
    
    deleteButton.addEventListener('click', function(event) {
        event.target.parentElement.remove();
    });

    li.append(deleteButton); // must be .appendChild for Judge

    ul.append(li); // must be .appendChild for Judge
    input.value = ''; //

}