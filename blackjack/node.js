// arrays
let cards = []
let hasBlackJack = false            // Booleans
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el') 
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards-el')
let player = {          //Objects
    name: 'maukka: ',
    chips: 145
}
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + player.chips + '€' 


function getRandomCard() {          //if else statments
    random =  Math.floor(Math.random() * 13) + 1   //Math.floor
    if(random > 10) {                               //Math.random
        return 10                                   //return statment
    } else if (random === 1) {
        return 11
    } else {
        return random
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] // arrays
    sum = firstCard + secondCard
    
    renderGame()
}
function renderGame() {
    cardEl.textContent = 'Cards: '
    
    for (let i = 0; i < cards.length; i++){ //for loops
        cardEl.textContent += cards[i] + ' '
    }
    
    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21){
        message = 'Nice!! you won BlackJack '
        hasBlackJack = true
    } else {
        message = 'you are out of the Game!!'
        isAlive = false
    }
    
    messageEl.textContent = message   
}
function newCard() {
    if (isAlive && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()}
}