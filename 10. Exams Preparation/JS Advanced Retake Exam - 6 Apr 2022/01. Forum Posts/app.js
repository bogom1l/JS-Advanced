window.addEventListener("load", solve);

function solve() {

  let titleInputElement = document.querySelector("#post-title");
  let categoryInputElement = document.querySelector("#post-category");
  let contentInputElement = document.querySelector("#post-content");

  let reviewListElement = document.querySelector("#review-list");
  let publishedListElement = document.querySelector("#published-list");

  let publishButton = document.querySelector("#publish-btn");
  let clearButton = document.querySelector("#clear-btn");

  publishButton.addEventListener('click', function (event) {

    //event.preventDefault(); ?

    let title = titleInputElement.value;
    let category = categoryInputElement.value;
    let content = contentInputElement.value;

    if (title == '' || category == '' || content == '') {
      return;
    }

    let li = document.createElement('li');
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let editButton = document.createElement('button');
    let approveButton = document.createElement('button');

    li.classList.add('rpost');
    h4.textContent = title;
    p1.textContent = 'Category: ' + category;
    p2.textContent = 'Content: ' + content;
    editButton.classList.add('action-btn');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editFunction);
    approveButton.classList.add('action-btn');
    approveButton.classList.add('approve');
    approveButton.textContent = 'Approve';
    approveButton.addEventListener('click', approveFunction);

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(approveButton);

    reviewListElement.appendChild(li);

    titleInputElement.value = '';
    categoryInputElement.value = '';
    contentInputElement.value = '';
  });

  function editFunction(event) {

    let title = event.currentTarget.parentElement.children[0].children[0].textContent;
    let category = event.currentTarget.parentElement.children[0].children[1].textContent.split(': ')[1];
    let content = event.currentTarget.parentElement.children[0].children[2].textContent.split(': ')[1];;

    titleInputElement.value = title;
    categoryInputElement.value = category;
    contentInputElement.value = content;

    event.currentTarget.parentElement.remove();
  }

  function approveFunction(event) {
    let title = event.currentTarget.parentElement.children[0].children[0].textContent;
    let category = event.currentTarget.parentElement.children[0].children[1].textContent.split(': ')[1];
    let content = event.currentTarget.parentElement.children[0].children[2].textContent.split(': ')[1];;

    let li = document.createElement('li');
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    li.classList.add('rpost');
    h4.textContent = title;
    p1.textContent = 'Category: ' + category;
    p2.textContent = 'Content: ' + content;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    li.appendChild(article);

    publishedListElement.appendChild(li);

    event.currentTarget.parentElement.remove();
  }

  clearButton.addEventListener('click', function (event) {

    //console.log(document.querySelector("#published-list").children)

    for (let i = 0; i < document.querySelector("#published-list").children.length; i++) {
      document.querySelector("#published-list").children[i].remove();
    }

  });

}
