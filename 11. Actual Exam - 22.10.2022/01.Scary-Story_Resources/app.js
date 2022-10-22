window.addEventListener("load", solve);

function solve() {

  let firstNameInputElement = document.querySelector("#first-name");
  let lastNameInputElement = document.querySelector("#last-name");
  let ageInputElement = document.querySelector("#age");
  let storyTitleInputElement = document.querySelector("#story-title");
  let genreInputElement = document.querySelector("#genre");
  let storyTextInputElement = document.querySelector("#story");

  let previewListElement = document.querySelector("#preview-list");
  let divMainElement = document.querySelector("#main");

  let publishButton = document.querySelector("#form-btn");

  publishButton.addEventListener('click', function (event) {

    event.preventDefault();

    if (firstNameInputElement.value === '' || lastNameInputElement.value === '' || ageInputElement.value === ''
      || genreInputElement.value === '' || storyTitleInputElement.value === '' || storyTextInputElement.value === '') {
      return;
    }

    let li = document.createElement('li');
    li.classList.add('story-info');

    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    h4.textContent = 'Name: ' + firstNameInputElement.value + ' ' + lastNameInputElement.value;
    p1.textContent = 'Age: ' + ageInputElement.value;
    p2.textContent = 'Title: ' + storyTitleInputElement.value;
    p3.textContent = 'Genre: ' + genreInputElement.value;
    p4.textContent = storyTextInputElement.value;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);

    let saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');
    saveButton.textContent = 'Save Story';
    saveButton.addEventListener('click', saveFunction);
    saveButton.disabled = false;

    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit Story';
    editButton.addEventListener('click', editFunction);
    editButton.disabled = false;

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete Story';
    deleteButton.addEventListener('click', deleteFunction);   
    deleteButton.disabled = false;

    li.appendChild(article);
    li.appendChild(saveButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    previewListElement.appendChild(li);

    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    ageInputElement.value = '';
    genreInputElement.value = '';
    storyTitleInputElement.value = '';
    storyTextInputElement.value = '';

    event.currentTarget.disabled = true;
    
  });

  function editFunction(event) {

    firstNameInputElement.value = event.currentTarget.parentElement.children[0].children[0].textContent.split(': ')[1].split(' ')[0];
    lastNameInputElement.value = event.currentTarget.parentElement.children[0].children[0].textContent.split(': ')[1].split(' ')[1];
    ageInputElement.value = event.currentTarget.parentElement.children[0].children[1].textContent.split(': ')[1];
    storyTitleInputElement.value = event.currentTarget.parentElement.children[0].children[2].textContent.split(': ')[1];
    genreInputElement.value = event.currentTarget.parentElement.children[0].children[3].textContent.split(': ')[1];
    storyTextInputElement.value = event.currentTarget.parentElement.children[0].children[4].textContent;

    publishButton.disabled = false;

    event.currentTarget.disabled = true;
    event.currentTarget.parentElement.remove();
  }

  function saveFunction(event) {

    event.currentTarget.disabled = true; //

    divMainElement.textContent = '';

    let h1 = document.createElement('h1');
    h1.textContent = "Your scary story is saved!";

    divMainElement.appendChild(h1);
  }

  function deleteFunction(event) {

    event.currentTarget.disabled = true;//
     
    event.currentTarget.parentElement.remove();
    publishButton.disabled = false;
  }

}
