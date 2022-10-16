window.addEventListener('load', solution);

function solution() {

  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');

  const block = document.getElementById('block');
  const preview = document.getElementById('infoPreview');

  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;

  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  inputValues.pop();
  const labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));

  submitButton.addEventListener('click', (event) => {

    const fullName = inputValues[0];
    const email = inputValues[1];

    if (fullName.value && email.value !== '') {

      for (let i = 0; i < inputValues.length; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
        preview.appendChild(liElement);
      }

      for (const input of inputValues) {
        input.value = '';
      }

      event.target.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }
  });

  editButton.addEventListener('click', (event) => {

    const listItems = Array.from(preview.childNodes);
    //const listItems2 = document.querySelectorAll('#infoPreview li');
    //listItems[i].textContent.split(': ')[0]

    for (let i = 0; i < inputValues.length; i++) {

      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();
    }

    submitButton.disabled = false;
    event.target.disabled = true; //editButton.disabled = true
    continueButton.disabled = true;
  });

continueButton.addEventListener('click', (event) => {

  let h3 = document.createElement('h3');
  h3.textContent = 'Thank you for your reservation!';

  block.textContent = ''; //block.innerHTML = '';
  block.appendChild(h3);
});

}
