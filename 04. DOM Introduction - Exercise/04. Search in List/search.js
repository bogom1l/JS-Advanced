function search() {
   const elements = Array.from(document.getElementById('towns').children);
   const inputText = document.getElementById('searchText').value.toLowerCase();
   let matches = 0;

   for (const element of elements) {
      const currentElementText = element.textContent.toLowerCase();
      if (currentElementText.includes(inputText)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         matches++;
      }
      else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}