//create buttons for the letters - done
//filter the constants with >=3 words - done
// get the random word to guess - done
//get the length of the word and show the letters in dashes- done
//show how many guesses - 8 guesses - done
//user to click letter button to guess and get that value  - done
//if the guess letter includes the guess word, show it
// if incorrect decrease life and disable button - done
// if number guess = 0 then alert LOSER - done
// if not 0 can guess again - done

//create buttons for the letters - done

import { commonWords } from "./constants";
const letter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]
const buttonLetter = document.querySelector("#buttonLetter")

const btnLetter = letter.map(function (letter) {
  return `
        <button class = "buttonCon">${letter}</buttton>
    `
})
buttonLetter.innerHTML = btnLetter.join(" ")

const number =document.querySelector('#number')

const dashes = document.querySelector('#noDash')

//filter the constants with >=3 words - done
const wordsThreeorMore = commonWords.filter( (words)=> {return words.length >= 3})

// get the random word to guess  by using Math.random * length of the filtered consonants
// and round it to whole no. - done
let randomWordToGuess =''
randomWordGenerator()
// let randomIndex = Math.floor(Math.random() * wordsThreeorMore.length)
// let randomWordToGuess = wordsThreeorMore[randomIndex].toUpperCase()
console.log(randomWordToGuess)
console.log(wordsThreeorMore)

//get the length of the word and show the letters in dashes- done
let hiddenWord = []

generateDash()

            // const dashes = document.querySelector('#noDash')

            // const hiddenWord = []
            // for (var i = 0; i < randomWordToGuess.length; i++) {
            //     hiddenWord.push(`<div>-</div>`)

            // }
            // console.log(hiddenWord,'word1')
            // dashes.innerHTML = hiddenWord.join('')

//show how many guesses - 8 guesses

let maxGuess = 8
let arrGuessletter = []

const noGuess = document.querySelector('#noGuess')
const loser = document.querySelector('#loser')

buttonLetter.addEventListener("click", function(e){
    const targetLetter = e.target
    const letterClick =  targetLetter.innerText
   
    let blnLetterGuess = randomWordToGuess.includes(letterClick)
        
    if (blnLetterGuess) {
        // -----  convert string to dashes ------
    
        for (let i = 0; i < randomWordToGuess.length; i++) {
            if (randomWordToGuess[i] == letterClick) {
              hiddenWord.splice(i, 1, `<div>${randomWordToGuess[i]}</div>`)
            }
            dashes.innerHTML = hiddenWord.join("")
          }


          console.log(dashes,'hidden')
            
// check if the clicked letter is the same with the guess word
//                 if winner -  all letter buttons will be disabled 
            if (!dashes.innerHTML.includes('-')){

                winner.hidden = false
                disableButton()
            }
    } else {
            maxGuess = maxGuess - 1
            }

        number.innerHTML = maxGuess
        targetLetter.setAttribute('disabled',true)
        targetLetter.style.backgroundColor =" #a7a763"
        if (maxGuess == 0){
            loser.hidden = false
            showAnswer()
            disableButton()
        }
 })

 function disableButton() {
    const allLetter = document.querySelectorAll('.buttonCon')
    allLetter.forEach(function(e){
     e.setAttribute('disabled',true)
     e.style.backgroundColor =" #a7a763"

 })
}

function showAnswer(){

    for (let i = 0; i < randomWordToGuess.length; i++) {
        hiddenWord.splice(i, 1, `<div>${randomWordToGuess[i]}</div>`)
    }
    dashes.innerHTML = hiddenWord.join("")
}

function reset(){
    
    maxGuess = 8
    number.innerHTML = maxGuess

    
    
}

function enableButton(){
    const allLetter = document.querySelectorAll('.buttonCon')
    allLetter.forEach(function(e){
     e.setAttribute('disable',false)
     e.style.backgroundColor = "black"
   
    })

}
// const clear = document.querySelector('#reset')
// clear.addEventListener('click',function(e){
//     reset()
//     enableButton()
//     randomWordGenerator()
//     generateDash()
// })


function randomWordGenerator() {
    let randomIndex = Math.floor(Math.random() * wordsThreeorMore.length)
    randomWordToGuess = wordsThreeorMore[randomIndex].toUpperCase()
    console.log(randomWordToGuess)
    
}

function generateDash() {
    // const dashes = document.querySelector('#noDash')
    // let hiddenWord = []
    // dashes.remove()
    //  dashes = document.querySelector('#noDash')
    dashes.innerHTML =""
    // dashes.location.reload()
    // dashes.removeChild(dashes.firstChild)
    console.log(dashes.firstChild,'1')
    console.log(dashes)
    // debugger
    // dashes.innerHTML
    console.log(dashes.innerText,'das')
    for (var i = 0; i < randomWordToGuess.length; i++) {
    hiddenWord.push(`<div>-</div>`)
    }
    console.log(hiddenWord,'word1')
    dashes.innerHTML = hiddenWord.join('')

}
