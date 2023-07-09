let addItem = document.getElementById('addItem');
let btnSubmit = document.getElementById('btnSubmit');
let input = document.getElementById('inputList')

btnSubmit.addEventListener('click', function() {
    const inputValue = input.value;
    // console.log(inputValue);
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    addItem.appendChild(listItem);
    input.value = '';
});