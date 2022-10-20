window.addEventListener("load", solve);

function solve() {

  let makeInputElement = document.querySelector("#make");
  let modelInputElement = document.querySelector("#model");
  let yearInputElement = document.querySelector("#year");
  let fuelTypeInputElement = document.querySelector("#fuel");
  let originalCostInputElement = document.querySelector("#original-cost");
  let sellingPriceInputElement = document.querySelector("#selling-price");

  let publishButton = document.querySelector("#publish");
  let tableBodyElement = document.querySelector("#table-body");
  let carsListElement = document.querySelector("#cars-list");
  let totalProfitElement = document.querySelector("#profit");

  let totalSum = Number(0);

  publishButton.addEventListener('click', function (event) {
    event.preventDefault();

    let make = makeInputElement.value;
    let model = modelInputElement.value;
    let year = yearInputElement.value;
    let fuel = fuelTypeInputElement.value;
    let originalCost = Number(originalCostInputElement.value);
    let sellingPrice = Number(sellingPriceInputElement.value);

    if (make == '' || model == '' || year == ''
      || fuel == '' || originalCost == '' || sellingPrice == ''
      || originalCost > sellingPrice) {
      //console.log("ERROR ?");
      return;
    }

    let tr = document.createElement('tr');
    tr.classList.add('row');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');

    td1.textContent = make;
    td2.textContent = model;
    td3.textContent = year;
    td4.textContent = fuel;
    td5.textContent = originalCost;
    td6.textContent = sellingPrice;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    let editButton = document.createElement('button');
    editButton.classList.add('action-btn');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editFunction);
    td7.appendChild(editButton);

    let sellButton = document.createElement('button');
    sellButton.classList.add('action-btn');
    sellButton.classList.add('sell');
    sellButton.textContent = 'Sell';
    sellButton.addEventListener('click', sellFunction);
    td7.appendChild(sellButton);

    tr.appendChild(td7);

    tableBodyElement.appendChild(tr);

    makeInputElement.value = '';
    modelInputElement.value = '';
    yearInputElement.value = '';
    fuelTypeInputElement.value = '';
    originalCostInputElement.value = '';
    sellingPriceInputElement.value = '';
  });


  function editFunction(event) {

    let currRow = event.currentTarget.parentElement.parentElement;

    let make = event.currentTarget.parentElement.parentElement.children[0].textContent;
    let model = event.currentTarget.parentElement.parentElement.children[1].textContent;
    let year = event.currentTarget.parentElement.parentElement.children[2].textContent;
    let fuel = event.currentTarget.parentElement.parentElement.children[3].textContent;
    let price = event.currentTarget.parentElement.parentElement.children[4].textContent;
    let sell = event.currentTarget.parentElement.parentElement.children[5].textContent;

    makeInputElement.value = make;
    modelInputElement.value = model;
    yearInputElement.value = year;
    fuelTypeInputElement.value = fuel;
    originalCostInputElement.value = price;
    sellingPriceInputElement.value = sell;

    currRow.remove();
  }

  function sellFunction(event) {

    let currRow = event.currentTarget.parentElement.parentElement;

    let li = document.createElement('li');
    li.classList.add('each-list');

    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');

    let make = event.currentTarget.parentElement.parentElement.children[0].textContent;
    let model = event.currentTarget.parentElement.parentElement.children[1].textContent;
    let year = event.currentTarget.parentElement.parentElement.children[2].textContent;
    let fuel = event.currentTarget.parentElement.parentElement.children[3].textContent;
    let price = event.currentTarget.parentElement.parentElement.children[4].textContent;
    let sell = event.currentTarget.parentElement.parentElement.children[5].textContent;

    span1.textContent = make + ' ' + model;
    span2.textContent = year; //+ ''
    span3.textContent = Number(sell - price); //+ ''

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);

    carsListElement.appendChild(li);

    totalSum += Number(sell - price);

    totalProfitElement.textContent = totalSum.toFixed(2);

    currRow.remove();
  }


}
