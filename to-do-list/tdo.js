const myDivList = document.getElementById('myDiv-list')
  // get the input
  let userInput = document.getElementById('userInput') 


  // this function user can add what they want to do into the list
  function add() {  
    // crates new 'p' element
  const para = document.createElement('p') 
    //crates a button and set the value to done
  const doneBtn = document.createElement('button')  
  doneBtn.textContent = 'Done!'
  doneBtn.className = 'doneBtn'
  // set the userInput value to paratextContent
  para.textContent = userInput.value 
  // making the new 'p' content
  myDivList.appendChild(para) 
  para.appendChild(doneBtn)
  userInput.value = ''
  doneBtn.addEventListener('click', function() {
    para.textContent = ''
  })
}

function clearList() {
  myDivList.innerHTML = ''
}