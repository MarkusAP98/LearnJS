let number = document.getElementById('number')

function Decrease() {
    number.textContent -= 1
    if (number.textContent < 0) {
        document.body.querySelector('h2').style.color = 'red'
    } else if (number.textContent == 0) {
        document.body.querySelector('h2').style.color = 'black'

    }
}
function Reset() {
    number.textContent = 0
        document.body.querySelector('h2').style.color = 'black'
    

}
function Increase() {
    ++number.textContent
    if (number.textContent > 0 ) {
        document.body.querySelector('h2').style.color = 'green'
        
    }

}
