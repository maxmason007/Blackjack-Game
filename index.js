
let player = {
    name: "Max",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

console.log(cards)

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card
        cards.push(card)
        renderGame()
    }

}












































// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// // let randomCard = Math.floor((Math.random() * 11) + 1)
// // let randomCardTwo = Math.floor((Math.random() * 11) + 1)
// // let randomCardThree = Math.floor((Math.random() * 11) + 1)
// // let randomCardFour = Math.floor((Math.random() * 11) + 1)
// // let randomCardFive = Math.floor((Math.random() * 11) + 1)

// // let cards = [cardonevar, cardtwovar]
// // let sumTwo = randomCard + randomCardTwo
// // let sumThree = randomCard + randomCardTwo + randomCardThree
// // let sum = randomCard + randomCardTwo + randomCardThree + randomCardFour + randomCardFive

// // let cardsel = document.getElementById("cards-el")
// // let sumel = document.getElementById("sum-el")
// let msgeel = document.getElementById("message-el")

// //if start game is clicked then change from -want to play a round? to rest


// function startGame() {
//     // sumel.innerText = "Sum: " + sum
//     // cardsel.innerText = "Cards: " + firstCard + " " + secondCard

//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"

//     } else if (sum === 21) {
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true

//     } else {
//         message = "You're out of the game!"
//         isAlive = false

//     }
//     msgeel.textContent = message
// }



// // function newCard() {
// //     cardsel.innerText = "Cards: " + randomCard + " " + randomCardTwo + " " + randomCardThree
// //     sumel.innerText = "Sum: " + sumThree
// // }








// // console.log(message)
// // // console.log(cards)
// // console.log(randomCard)

// // //****HOME****//

// // //****CLICK START BUTTON**** //
// // //Do not allow new card to be clicked only after start game - new card function comes after start game in loop///

// // //WHEN START IS CLICKED DO THE FOLLOWING : 

// // //Create 2 random numbers between 1 - 11// 
// // //Save these as variables - firstcard, 2ndcard, (3rd,4th + 5th card is needed)
// // //dependent on the cards/sum create a message showing what to do next in the game.

// // //DOM - 1. show on screen, card 1 and card 2. 
// // //      2. show on screen the sum of card 1 and 2
// // //      3. show message at the top

// // //if sum is 21 on first game do not allow new card or generally
// // //if sum = 21 or more is true do not allow new card, only allow start game to be clicked

// // //**CLICK NEW CARD***/


// // //add third card variable to sum amount//
// // //DOM - 1. show card 3 with card 2 and 1 on screen
// // //      2. show on screen the sum of card 1 and 2 and 3

// // //repeat for card 4 and card 5 potential 