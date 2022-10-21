function solve() {

    let nameInputElement = document.querySelector("#recipientName");
    let titleInputElement = document.querySelector("#title");
    let messageInputElement = document.querySelector("#message");

    let addToListButton = document.querySelector("#add");
    let resetButton = document.querySelector("#reset");

    let list = document.querySelector("#list");
    let sentList = document.querySelector("body > section > article > div.sent-mails > ul");
    let deleteList = document.querySelector("body > section > article > div.trash > ul");

    addToListButton.addEventListener('click', function(event) { 
        event.preventDefault();

        if(nameInputElement.value == '' || titleInputElement.value == '' || messageInputElement.value == '') {
            return;
        }

        let li = document.createElement('li');
        let h4_1 = document.createElement('h4');
        let h4_2 = document.createElement('h4');
        let span = document.createElement('span');
        let div = document.createElement('div');
        let sendButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        h4_1.textContent = 'Title: ' + titleInputElement.value;
        h4_2.textContent = 'Recipient Name: ' + nameInputElement.value;
        span.textContent = messageInputElement.value; 

        div.id = 'list-action';

        sendButton.type = 'submit'; 
        deleteButton.type = 'submit'; 

        sendButton.id = 'send';
        deleteButton.id = 'delete';

        sendButton.textContent = 'Send';
        deleteButton.textContent = 'Delete';

        sendButton.addEventListener('click', sentFunction);
        deleteButton.addEventListener('click', deleteFunction);

        div.appendChild(sendButton);
        div.appendChild(deleteButton);

        li.appendChild(h4_1);
        li.appendChild(h4_2);
        li.appendChild(span);
        li.appendChild(div);

        list.appendChild(li);

        nameInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
    });

    resetButton.addEventListener('click', function(event) {
        event.preventDefault(); // ?
        nameInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
    });

    function sentFunction(event) {

        event.preventDefault();

        let li = document.createElement('li');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let div = document.createElement('div');
        let deleteButton2 = document.createElement('button');

        span1.textContent = 'To: ' + event.currentTarget.parentElement.parentElement.children[0].textContent.split(': ')[1]; // + ' '? 
        span2.textContent = 'Title: ' + event.currentTarget.parentElement.parentElement.children[1].textContent.split(': ')[1]; 

        div.classList.add('btn');
        
        deleteButton2.type = 'submit'; //event.preventDefault(); ?
        deleteButton2.classList.add('delete');
        deleteButton2.textContent = 'Delete';
        deleteButton2.addEventListener('click', deleteFunction);

        div.appendChild(deleteButton2);

        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(div);

        sentList.appendChild(li);

        event.currentTarget.parentElement.parentElement.remove();
    }

    function deleteFunction(event) {

        event.preventDefault();
        
        let li = document.createElement('li');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');

        span1.textContent = 'To: ' + event.currentTarget.parentElement.parentElement.children[0].textContent.split(': ')[1]; // + ' '? 
        span2.textContent = 'Title: ' + event.currentTarget.parentElement.parentElement.children[1].textContent.split(': ')[1]; 

        li.appendChild(span1);
        li.appendChild(span2);

        deleteList.appendChild(li);

        event.currentTarget.parentElement.parentElement.remove();
    }

}



solve()