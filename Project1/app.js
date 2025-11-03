//MINI-PROJECT ONE
//Practice onclick button to display a message
const error = document.getElementById("error");
const button = document.querySelector("button");

const purchase =()=>{
    error.textContent = "Something went wrong, please try again!"
    button.style.backgroundColor = "red"
}

//MINI-PROJECT TWO
//SIMPLE CALCULATOR

let one = 8
let two = 2
document.getElementById("one").textContent = one
document.getElementById("two").textContent = two
const sum = document.getElementById("sum");

const add =()=>{
    let result = one + two
    sum.textContent ="Sum:" + result
}
const subtract =()=>{
    let result = one - two
    sum.textContent ="Sum:" + result
}
const divide =()=>{
    let result = one / two
    sum.textContent ="Sum:" + result
}
const multiply =()=>{
    let result = one * two
    sum.textContent ="Sum:" + result
}

//MINI-PROJECT THREE
//A Blackjack Game
let player = {
    name: "Per",
    score: 200
}

let cards = []
let sums = 0
let hasBlackJack = false
let isAlive = false
let message =  ""

const dropMessage = document.getElementById("message")
const kard =document.getElementById("card")
const result = document.getElementById("total")

let players = document.getElementById("player")
players.textContent = player.name + ": $" + player.score


function getRandomCard (){
    let randomNumber = Math.floor (Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame () {
    isAlive = true 
    let cardOne = getRandomCard()
    let cardTwo = getRandomCard()
    cards = [cardOne, cardTwo]
    sums = cardOne + cardTwo
    renderGame()
}

function renderGame () {
    kard.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        kard.textContent += cards[i] + " "
    }
       result.textContent = "Sum: " + sums
    if (sums <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sums === 21) {
        message = "You've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    } 
  
    dropMessage.textContent = message
}

function newCard () {  
//Only allow the player to get a new card if she Is alive and does NOT have Blackjack 
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sums += card
        cards.push(card)
        renderGame()
    }
}

//Practice Math.floor
let hands = ["rock", "paper", "scissors"]

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}
console.log(getHand());

//Practice sort() For-loop and Push() in an array
let fruit = ["apple", "orange", "apple", "orange", "apple", "orange"]
let appleShelf = []
let orangeShelf = []

function sortFruit() {
    for (let index = 0; index < fruit.length; index++) {
        if (fruit[index] === "apple") {
            appleShelf.push(fruit[index]) 
            
        } else {
            orangeShelf.push(fruit[index])
        }  
    }
}

sortFruit()
console.log(appleShelf);
console.log(orangeShelf);



