function solve() { //my solution :) better one ;p
  
    let textArea = document.getElementsByTagName('textarea')[0];

    let addButtons = Array.from(document.getElementsByClassName('add-product'));
    addButtons.forEach(x => {
        x.addEventListener('click', add);
    });

    let resultProductsList = [];
    let totalPrice = 0;
    let isCheckoutDone = false;

    function add(event) {
        if(isCheckoutDone) {
            return;
        }

        let parent = event.target.parentElement.parentElement;
        let name = parent.querySelector('.product-title').textContent;
        let price = parent.querySelector('.product-line-price').textContent;

        if(resultProductsList.indexOf(name) == -1) {
            resultProductsList.push(name);
        }
        
        totalPrice += Number(price);

        textArea.textContent += `Added ${name} for ${price} to the cart.\n`;
    }

    let checkoutButton = document.getElementsByClassName('checkout')[0];
    checkoutButton.addEventListener('click', checkout);

    function checkout(event) {
        if(isCheckoutDone) {
            return;
        }

        let list = resultProductsList.join(', ');
        textArea.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
        
        isCheckoutDone = true;
    }
   
}