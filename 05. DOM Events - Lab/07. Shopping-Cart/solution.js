function solve() {
  
    let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
    shoppingCart.addEventListener('click', onClick);

    let result = document.getElementsByTagName('textarea')[0];

    let products = [];
    let totalPrice = 0;

    let checkoutDone = false;

    function onClick(event) {

        if(event.target.nodeName !== 'BUTTON') { //event.target.nodeName ALWAYS RETURN UPPERCASE
             return;
        }

        if(checkoutDone) {
            return;
        }

        let currButton = event.target;
        let buttonClassList = Array.from(currButton.classList);

        if(buttonClassList.indexOf('add-product') >= 0) { 
            let productElement = event.target.parentElement.parentElement;

            let productName = productElement.querySelectorAll('.product-title')[0].textContent;
            let productPrice = productElement.querySelectorAll('.product-line-price')[0].textContent;
    
            result.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
    
            if(products.indexOf(productName) < 0) {
                products.push(productName);
            }
    
            totalPrice += Number(productPrice);
    
            console.log(products);
            console.log(totalPrice.toFixed(2));
        }
        else if(buttonClassList.indexOf('checkout') >= 0) {
        
            let list = products.join(', ');
            result.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;

            checkoutDone = true;
        }
        

    };




   
}