function solve() {

  //na checo resenieto

  let section = document.getElementsByTagName('section')[1];

  let archiveSectionElement = document.getElementsByTagName('section')[3];

  let fieldElements = Array.from(document.getElementsByTagName('form')[0]);
  let authorElement = fieldElements[0];
  let titleElement = fieldElements[1];
  let categoryElement = fieldElements[2];
  let contentElement = fieldElements[3];
  let createBtnElement = document.querySelector("body > div > div > aside > section:nth-child(1) > form > button")

  let arhievedObjects = [];

  createBtnElement.addEventListener("click", function (e) {
     e.preventDefault();
     let author = authorElement.value;
     let title = titleElement.value;
     let category = categoryElement.value;
     let content = contentElement.value;

     let articleElement = document.createElement('article');
     let h1Element = document.createElement('h1');
     h1Element.textContent = title;
     let pCategoryElement = document.createElement('p');
     pCategoryElement.innerHTML = `Category: <strong>${category}</strong>`;
     let pCreatorElement = document.createElement('p');
     pCreatorElement.innerHTML = `Creator: <strong>${author}</strong>`;
     let pContentElement = document.createElement('p');
     pContentElement.textContent = content;
     let divButtonsElement = document.createElement('div');
     divButtonsElement.classList.add('buttons');
     let delButton = document.createElement('button');
     delButton.textContent = `Delete`;
     delButton.classList.add('btn');
     delButton.classList.add('delete');

     

     delButton.addEventListener("click", function (e) {
        e.currentTarget.parentElement.parentElement.remove();
     });

     let archiveButton = document.createElement('button');
     archiveButton.textContent = 'Archive';
     archiveButton.classList.add(`btn`);
     archiveButton.classList.add('archive');

     archiveButton.addEventListener("click", function (e) {

        let findOlElement = archiveSectionElement.children[1];
        findOlElement.remove();
        let newOlElement = document.createElement('ol');

        let titleElement = e.currentTarget.parentElement.parentElement.children[0];
        if (!arhievedObjects.includes(titleElement.textContent)) {
           arhievedObjects.push(titleElement.textContent);
        }
        arhievedObjects = arhievedObjects.sort((a, b) => a.localeCompare(b));
        for (let title of arhievedObjects) {
           let liElement = document.createElement('li');
           liElement.textContent = title;
           newOlElement.appendChild(liElement);
        }
        archiveSectionElement.appendChild(newOlElement);
        e.currentTarget.parentElement.parentElement.remove();
     })

     divButtonsElement.appendChild(delButton);
     divButtonsElement.appendChild(archiveButton);
     articleElement.appendChild(h1Element);
     articleElement.appendChild(pCategoryElement);
     articleElement.appendChild(pCreatorElement);
     articleElement.appendChild(pContentElement);
     articleElement.appendChild(divButtonsElement);

     section.appendChild(articleElement);
  });
}
