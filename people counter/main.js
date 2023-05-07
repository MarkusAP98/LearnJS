let countEl = document.getElementById('count-el')
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById('save-el')

function save(){
    saved = count + ' - '; 
    saveEl.textContent += saved
    count = 0
    countEl.textContent = count
    console.log(count)
}




let resetBtn = document.getElementById('reset-btn');
function reset() {
    count = 0
    countEl.innerText = count
}
resetBtn()
console.log(resetBtn);



let welcomeEl = document.getElementById('welcome-el')

let name = 'Markus'
let greeting = 'Hello '

welcomeEl.innerText = greeting + name
welcomeEl.innerText += '😀';


