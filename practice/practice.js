/* let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21){
    console.log('do you want to draw a new card?')
} else if (sum === 21) {
    console.log('you won by blackjack')
} else if (sum > 21) {
    console.log('you are out of the game')
}
 */

/* 
let age = 22

if (age < 22){
    console.log('you may enter not the club')
} else {
    console.log('Welcome')
} */


/* let age = 100

if (age < 100){
    console.log('not elegible')
} else if (age === 100) {
    console.log('here is your birthday card from the king')
} else {
    console.log('not elegible already got one card')
} */




/* /* /* let firstName = 'Markus '
let lastName = 'Phantha '
let fullName = firstName + lastName
let greeting = 'Hello There'


function greeded() {
    fullStr = greeting + ', ' + firstName +'!'
    console.log(fullStr)
}
greeded()


let storedPoints = 0
let myPoints = 3

function add3Points(){
    myPoints += 3
}
function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()

console.log(myPoints)  */


/* let error = document.getElementById('error')

function errored() {
    error.innerText = 'Something went wrong please try again'

} */
/* 
let num1 = 8
let num2 = 2

document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2

let sumEl = document.getElementById('sum-el')

function add() {
    total = num1 + num2
    sumEl.textContent = total
}
function subract() {
    total = num1 - num2
    sumEl.textContent = total
}
function divide() {
    total = num1 / num2
    sumEl.textContent = total
}
function multiply() {
    total = num1 * num2
    sumEl.textContent = total
}
 */


// arrays
/* 
let featerdPosts = [
    'Check out my netflix', 
    'heres the code for my project' , 
    'i had just relaunched my portfolio'
]


let myPortfolio = [
    'Css basic',
    'Html basic',
    'Javascript basic',
    'Basic experienced with making website from start to finnished'
]
 */
//console.log(myPortfolio[3])


/* let myself = [
    age = 24,
    firstName = 'Markus',
    lastName = 'Phantha',
    likes = ['Games', 'Food', 'Sports'],
    wants = [
        'meet more girls', 
    'get a Frontend job', 
    'be a fireman',
    'be a bartender',
    'be a investor']

] */

/* let cards = [7,4]
cards.push(6)

let messages = [
    'Hey, how is it going?',
    'Im grat, thank you! how about you?',
    'All good, Been working on my portfolio lately.'
]
let newMessage = 'same here'
messages.push(newMessage)
messages.pop()
console.log(messages) */

/* for (let i = 0; i < 101; i += 10) {

    console.log(i)
} */


/* let messages = [
    'Hey, how is it going?',
    'Im grat, thank you! how about you?',
    'All good, Been working on my portfolio lately.','2','3','4'
]
for (let count = 0; count < messages.length; count += 1) {
    console.log(messages[count])
} */


/* let cards = [7, 3, 9]

for (let i = 0; i < cards.length; i += 1) {
    console.log(cards[i])
} */


/* let sentence = ['Hello', 'my', 'name', 'is', 'per']
let greetingEl = document.getElementById('greeting-el')

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + ' '
} */

/* let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2time
    } else {
        return player1Time
    }
} */

/* let fastestRace = getFastestRaceTime()
console.log(fastestRace) */

/* 
function raceTime() {
    totalRaceTime = player1Time + player2Time
    console.log(totalRaceTime)
}
raceTime()

 */



/* let randomNumber = Math.random() * 6
console.log(randomNumber) */

// get you random numbers between 0.000001 and 0.999999999999
// 0 - 6


/* let flooredNumber = Math.floor(3.45632)
console.log(flooredNumber)
 */

// it ground to a even number so if 3.4 it will ground it to 3
// anwswer = it removes the desimals so 3.6888999 = 3

/* 
let randomNumber = Math.floor( Math.random()* 6) + 1
console.log(randomNumber)
 */
// 012345

/* function rollDice() {
    randomNumber = Math.floor( Math.random()* 6 ) +1
    console.log(randomNumber)
}
rollDice() */


/* 
let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log('Generating certificate')
}
 */
/* 
let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false  && hasHintsLeft === false){
    ShowSolutuion()
}

function ShowSolutuion() {
    console.log('Showing the solution')
} */

/* 
let likesDocumentaries = true
let likesStartUps = false


if (likesDocumentaries || likesStartUps) {
    recommendMovie()
}

function recommendMovie() {
    console.log('Hey, check this out bro!!')
} */

// Objects - store data in-depth

/* let course = {
    title: 'Learn CSS Grid for free',
    lessons: 16,
    creator: 'per Harald',
    length: 63,
    level: 2,
    isFree: true,
    tags: ['html', 'css']

}


console.log(course.length) */


/* 
let castle = {
    bedrooms: 45,
    big: true,
    roof: 'yes',
    contain: [
        'bricks',
        'roof',
        'floor'
    ]
}

console.log(castle.contain[1])
console.log(castle.bedrooms) */


/* 
let person = {
    name: 'Markus',
    age: 24,
    country: 'Finland'
}

function logData() {
    data = person.name + ' is ' + person.age +' years old and live in ' + person.country
    console.log(data)
}
logData() */

/* 
let age = 15


if ( age < 6) {
    console.log('Free')
} else if ( age < 18 ){
    console.log('child Discount')
} else if (age < 26) {
    console.log('student Discount')
} else if (age < 66) {
    console.log('full prize')
} else {
    console.log('senior citizen Discount')
}
 */


/* 
let largeCountries = [
    'China', 'India', 'USA', 'Indonisia', 'Pakistan'
]

console.log('The 5 largest Countries in the world: ')
for (let i = 0; i < largeCountries.length; i++){
    console.log('- ' + largeCountries[i])
} */

/* 
let largeCountries = [
    'Tuvalu', 'India', 'USA', 'Indonisia', 'Monaco'
]

largeCountries.pop()
largeCountries.push('Pakistan')
largeCountries.shift()
largeCountries.unshift('China')
console.log(largeCountries) */
/* 
let dayOfMonth = 31
let weekDay = 'Friday'

if (dayOfMonth && weekDay){
    console.log('scaryface')
} */
/* 
let hands = ['rock', 'paper', 'scissor']

function handsGame() {
    let randomIndex = Math.floor(Math.random()* 3) 
    return hands[randomIndex]
}
console.log(handsGame())
 */
/* 
let fruit = ['apple', 'orange', 'apple', 'apple', 'orange']
let appleShelf = document.getElementById('apple-shelf')
let orangeShelf = document.getElementById('orange-self')

function shelf() {
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === 'apple'){
            appleShelf.textContent += 'apple '
        } else if (fruit[i] === 'orange'){
            orangeShelf.textContent += 'orange '
        }
    }

}
shelf() */
/* 

let btnClick = document.getElementById('btn-el')

btnClick.addEventListener('click', function () {
    console.log('addEventListener Btn Clicked!!')
}) */
/* 
let container = document.getElementById('container')
container.innerHTML = '<button onclick="buy()">Buy</button>'

function buy() {
    container.innerHTML += '<p>Thank you for buying!</p>'
} */


const recipient = 'James'
const sender = 'Markus'

const email = `Hey ${recipient} How is it going? cheers ${sender}`

console.log(email)