var userInput = document.getElementById('userInput').value;
const addBtn = document.getElementById('add-btn')
const para = document.createElement('p')



function add() {
  console.log(userInput);
  para.textContent = userInput
  document.body.querySelector('#myDiv-list').appendChild(para)
}