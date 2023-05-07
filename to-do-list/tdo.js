function add() {
  let userInput = document.getElementById('userInput').value;
  
  if (userInput.trim() !== '') {
    let listItem = document.createElement('li');
    listItem.textContent = userInput;

    let list = document.getElementById('myDiv-list');
    list.appendChild(listItem);

    document.getElementById('userInput').value = "";
  }
}

function clear() {
  let list = document.getElementById('myDiv-list');
  list.innerHTML = "";
}
