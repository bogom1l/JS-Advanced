function solve() {

   let arhievedObjects = [];

   let authorInputElement = document.querySelector("#creator");
   let titleInputElement = document.querySelector("#title");
   let categoryInputElement = document.querySelector("#category");
   let contentInputElement = document.querySelector("#content");

   let articleSection = document.querySelector("body > div > div > main > section")

   let archiveSection = document.querySelector("body > div > div > aside > section.archive-section");

   let createButton = document.querySelector("body > div > div > aside > section:nth-child(1) > form > button")

   createButton.addEventListener("click", function (event) {
      event.preventDefault();

      let article = document.createElement("article");

      let h1Element = document.createElement("h1");
      let pElement = document.createElement("p");
      let strongElement = document.createElement("STRONG");
      let pElement2 = document.createElement("p");
      let strongElement2 = document.createElement("STRONG");
      let pElement3 = document.createElement("p");

      h1Element.textContent = titleInputElement.value;
      strongElement.textContent = categoryInputElement.value;
      strongElement2.textContent = authorInputElement.value;

      // pElement.appendChild(strongElement);
      // pElement2.appendChild(strongElement2);
      pElement.innerHTML = `Category:<strong>${strongElement.textContent}</strong>`;
      pElement2.innerHTML = `Creator:<strong>${strongElement2.textContent}</strong>`;

      pElement3.textContent = contentInputElement.value;

      let divElement = document.createElement("div");
      divElement.classList.add("buttons");

      let deleteButton = document.createElement("button");
      deleteButton.classList.add("btn");
      deleteButton.classList.add("delete");
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", function (event) {
         event.target.parentElement.parentElement.remove();
      });

      let archiveButton = document.createElement("button");
      archiveButton.classList.add("btn")
      archiveButton.classList.add("archive");
      archiveButton.textContent = "Archive";

      archiveButton.addEventListener("click", archiveArticle);



      divElement.appendChild(deleteButton);
      divElement.appendChild(archiveButton);

      article.appendChild(h1Element);
      article.appendChild(pElement);
      article.appendChild(pElement2);
      article.appendChild(pElement3);

      article.appendChild(divElement);

      articleSection.appendChild(article);
   });


   function failedAttempToArchieve(event) {
      let currentTitle = event.target.parentElement.parentElement.children[0].textContent;

      let currOl = document.querySelector("body > div > div > aside > section.archive-section > ol");
      let li = document.createElement("li");
      li.textContent = currentTitle;

      //
      let liElements = Array.from(currOl.children);
      liElements.sort((a, b) => a.textContent - b.textContent);
      //

      currOl.appendChild(li);
      event.target.parentElement.parentElement.remove();
   };

   //sort 'li' elements in 'ol'
   function archiveArticle(e) {

      let currOl = document.querySelector("body > div > div > aside > section.archive-section > ol");
      currOl.remove();
      let ol = document.createElement('ol');

      let currentTitle = e.target.parentElement.parentElement.children[0];

      if(!arhievedObjects.includes(currentTitle.textContent)){
         arhievedObjects.push(currentTitle.textContent);
      }
      arhievedObjects = arhievedObjects.sort((a, b) => a.localeCompare(b));

      for (let title of arhievedObjects) {
         let li = document.createElement('li');
         li.textContent = title;
         ol.appendChild(li);
      }

      archiveSection.appendChild(ol);
      e.target.parentElement.parentElement.remove();
   }




}
