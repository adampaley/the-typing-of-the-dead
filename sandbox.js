let defeatedZombieWords = []
let playerLevel = 1
const winCondition = [10, 20, 30, 40]
// pull word options from bank by level
const wordObj = wordBank.find((wordLevel) => wordLevel.level === playerLevel)
let wordList = wordObj.vocab
let score = 0
let zombieWord = ""


const buttonEl = document.querySelectorAll(".game-buttons")
const zombieCon = document.querySelector(".zombie-container")
const playerEl = document.querySelector("#player")
const scoreEl = document.querySelector("#score")

// randomize word selection, remove word from array so it does not generate again
const getRandomWord = () => {
    if (wordList.length === 0) {
        return null
    }
    let zombieWord = wordList[Math.floor(Math.random() * wordList.length)]
    let zombieWordIndex = wordList.indexOf(zombieWord)
    wordList.splice(zombieWordIndex, 1)
    return zombieWord
}

const spawnZombie = () => {
    setInterval(() => {
        const zombieDiv = document.createElement("div")
        zombieDiv.classList.add("zombie")

        const zombieImg = document.createElement("img")
        zombieImg.classList.add("zombie-render")
        zombieImg.src = "./assets/generic-zombie-sprite.webp"

        zombieWord = getRandomWord()
        const zombieText = document.createElement("div")
        zombieText.classList.add("zombie-text")
        zombieText.textContent = zombieWord

        zombieDiv.setAttribute('data-word', zombieWord);

        zombieDiv.appendChild(zombieImg)
        zombieDiv.appendChild(zombieText)
        zombieCon.appendChild(zombieDiv)
    }, 6000)
}
spawnZombie()
console.log(wordList)


const killZombie = () => {
    const firepower = playerEl.value
    if (firepower === zombieWord) {
        score++
        scoreEl.textContent = `Score: ${score}`
        defeatedZombieWords.push(zombieWord)
    }

    const zombieElements = document.querySelectorAll('.zombie');
    zombieElements.forEach(zombie => {
        if (zombie.getAttribute('data-word') === zombieWord) {
            zombie.remove(); // Remove the zombie element
        }
    });
}


killZombie()
console.log(defeatedZombieWords)

const completeLevel = () => {
    if (defeatedZombieWords.length >= winCondition[playerLevel - 1]) {
        return playerLevel++
    }
}
completeLevel()
console.log(playerLevel)

const init = () => {
    playerLevel = 0
    score = 0
    playerEl.value = ""
    // defeatedZombieWords.forEach((word) => { // adding these lines as a failsafe in case reseting without reloading does not put the words back into list
    //     wordList.push(word)
    // })
    defeatedZombieWords = []
}

const handleReset = () => { // add event after building out html, cached elements, and dom

    init()
}
handleReset()
console.log(defeatedZombieWords)
console.log(wordList)
// if I reset the game using a button, will the words return? 
// as the zombies are defeated, might need to push them in an array of completed words and push(pop) them in at reset
// also to clear that array when going to the next level

const handlePlay = () => {
    getRandomWord()
    killZombie()
    // completeLevel()
    handlePlay()
}


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
playerEl.addEventListener("input", killZombie)
