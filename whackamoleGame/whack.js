const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft= document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

// this function loop trough to squares class and reomve to mole

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()* 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown' , () => {
        if(square.id == hitPosition) {
            result++
            console.log(result)
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    let timerId = null
    let count = 0
    let result = 0
    score.textContent = 0

    const interval = setInterval(() => {
        
        if (count === 15) {
            clearInterval(interval)
            squares.forEach(square => square.classList.remove('mole'))
            return
        }
        randomSquare()
        count++
    }, 1000)
}

