window.addEventListener('load', solve);

function solve() {

    let sendButton = document.querySelectorAll('button')[0];

    let productTypeSelect = document.querySelector('#type-product');
    let descriptionTextArea = document.querySelector('#description');
    let clientNameInput = document.querySelector("#client-name");
    let clientPhoneInput = document.querySelector('#client-phone');

    let receivedOrdersSection = document.querySelector("#received-orders");
    let completedOrdersSection = document.querySelector("#completed-orders");

    let clearButton = document.querySelectorAll('button')[1];

    sendButton.addEventListener('click', function (event) {
        event.preventDefault();

        let productType = productTypeSelect.value;
        let description = descriptionTextArea.value;
        let clientName = clientNameInput.value;
        let clientPhone = clientPhoneInput.value;

        if (description == '' || clientName == '' || clientPhone == '') {
            return;
        }

        productTypeSelect.value = '';
        descriptionTextArea.value = '';
        clientNameInput.value = '';
        clientPhoneInput.value = '';

        let containerDivElement = document.createElement('div');
        containerDivElement.classList.add('container');

        let h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${productType}`;

        let h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`;

        let h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${description}`;

        let startButton = document.createElement('button');
        startButton.classList.add('start-btn');
        startButton.textContent = 'Start repair';

        let finishButton = document.createElement('button');
        //finishButton.classList.add('finish-btn'); 
        finishButton.className = 'finish-btn';
        finishButton.textContent = 'Finish repair';
        finishButton.disabled = true;

        startButton.addEventListener('click', function (event) {
            event.currentTarget.disabled = true;
            //event.currentTarget.parentNode.querySelector('.finish-btn').disabled = false;
            finishButton.disabled = false; 
        });

        finishButton.addEventListener('click', function (event) {
            let containerDiv = event.currentTarget.parentNode;
            event.currentTarget.remove(); //finishbutton
            containerDiv.querySelector('.start-btn').remove(); //starbutton

            containerDiv.remove();
            completedOrdersSection.appendChild(containerDiv);
        });

        containerDivElement.appendChild(h2Element);
        containerDivElement.appendChild(h3Element);
        containerDivElement.appendChild(h4Element);
        containerDivElement.appendChild(startButton);
        containerDivElement.appendChild(finishButton);

        receivedOrdersSection.appendChild(containerDivElement);
    });

    clearButton.addEventListener('click', function (event) {
        let containerDiv = event.currentTarget.parentNode;

        let allContainers = Array.from(containerDiv.querySelectorAll('.container'));

        for (const container of allContainers) {
            container.remove();
        }
    });

}