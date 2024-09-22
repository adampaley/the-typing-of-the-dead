let defeatedZombieWords = []

let playerLevel = 1
const winLevel = [10, 20, 30, 40]
// pull word options from bank by level
const wordObj = wordBank.find((wordLevel) => wordLevel.level === playerLevel)
let wordList = wordObj.vocab
let score = 0

const buttonEl = document.querySelectorAll(".game-buttons")

// randomize word selection, remove word from array so it does not generate again
const getRandomWord = () => {
    let zombieWord = wordList[Math.floor(Math.random() * wordList.length)]
    let zombieWordIndex = wordList.indexOf(zombieWord)
    wordList.splice(zombieWordIndex, 1)
    return zombieWord
}


let zombieWord = getRandomWord()
console.log(zombieWord)

const killZombie = () => {
    defeatedZombieWords.push(zombieWord)
}

killZombie()
console.log(defeatedZombieWords)

const completeLevel = () => {
    if (defeatedZombieWords.length >= winLevel[playerLevel - 1]) {
        return playerLevel++
    }
}
completeLevel()
console.log(playerLevel)

const init = () => {
    playerLevel = 0
    score = 0
}

const handleReset = () => { // add event after building out html, cached elements, and dom
    defeatedZombieWords.forEach((word) => { // adding these lines as a failsafe in case reseting without reloading does not put the words back into list
        wordList.push(word)
    })
    defeatedZombieWords = []
    init()
}
handleReset()
console.log(defeatedZombieWords)
console.log(wordList)
// if I reset the game using a button, will the words return? 
// as the zombies are defeated, might need to push them in an array of completed words and push(pop) them in at reset
// also to clear that array when going to the next level


const handleButtonClicks = (event) => {
    const button = event.target
    const buttonText = button.textContent

    switch (true) {
        case button.classList.contains("play"):
            console.log("handlePlay()")
            break
        case button.classList.contains("instructions"):
            console.log("handleInstructions()")
            break
        case button.classList.contains("settings"):
            console.log("handleSettings()")
            break
        case button.classList.contains("reset"):
            console.log("handleReset()")
            break
        default:
            return
    } 
}

buttonEl.forEach(button => button.addEventListener('click', handleButtonClicks))

