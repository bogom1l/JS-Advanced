function deleteByEmail() {
    
    let input = document.getElementsByName('email')[0].value;
    //console.log(input);

    let tableCells = document
        .getElementById('customers')
        .getElementsByTagName('td');

    //console.log(tableCells);

    let result = document.getElementById('result');

    for(let cell of tableCells) {
    
        if(cell.textContent == input) {
            //console.log('FOUND');
            cell.parentElement.remove();
            result.textContent = 'Deleted.';
        }
        else {
            result.textContent = 'Not found.';
        }
    }

}