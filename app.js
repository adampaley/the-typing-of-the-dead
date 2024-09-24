const defeatedZombieWords = []
const winCondition = 1 // # of Zombie Words in defeatedZombieWords
let playerLevel = 1
const wordObj = wordBank.find((wordLevel) => wordLevel.level === playerLevel)
const wordList = wordObj.vocab
let zombieWord = ""
let timer = 60
let score = 0

const buttonEl = document.querySelectorAll(".game-buttons")
const zombieCon = document.querySelector(".zombie-container")
const playerEl = document.querySelector("#player")
const scoreEl = document.querySelector("#score")
const titleEl = document.querySelector("#game-title")
const timerEl = document.querySelector("#timer")


// select random word from wordList

const getRandomWord = () => {
    if (wordList.length === 0) {
        return null
    }
    let zombieWord = wordList[Math.floor(Math.random() * wordList.length)]
    let zombieWordIndex = wordList.indexOf(zombieWord)
    wordList.splice(zombieWordIndex, 1)
    return zombieWord
}

// add Zombie to screen, append zombieWord to zombieImg
const spawnZombie = () => {
    const zombieDiv = document.createElement("div")
    zombieDiv.classList.add("zombie")

    const zombieImg = document.createElement("img")
    zombieImg.classList.add("zombie-render")
    zombieImg.src = "./assets/generic-zombie-sprite.webp"

    zombieWord = getRandomWord()
    zombieDiv.setAttribute('data-word', zombieWord);

    const zombieText = document.createElement("div")
    zombieText.classList.add("zombie-text")
    zombieText.textContent = zombieWord

    zombieDiv.appendChild(zombieImg)
    zombieDiv.appendChild(zombieText)
    zombieCon.appendChild(zombieDiv)
}



// remove zombie elements from screen
const removeZombie = () => {
    const zombieEls = document.querySelectorAll(".zombie")
    zombieEls.forEach((zombie) => {
        if (zombie.getAttribute('data-word') === zombieWord) {
            zombie.remove()
            playerEl.value = ""
        }
    })
}

// when zombie text is precisely matched in input, remove element and increase score
const killZombie = () => {
    const firepower = playerEl.value.trim()
    if (firepower === zombieWord) {
        score++
        scoreEl.textContent = `Score: ${score}`
        defeatedZombieWords.push(zombieWord)
        removeZombie()
        renderOutcome()
    }

}


// start timer

const startTimer = () => {
    const gameTimer = setInterval(() => {
        if (timer <= 0) {
            clearInterval(gameTimer)
            removeZombie()
            renderOutcome()
        }  else {
            timer --
        }
        timerEl.textContent = `Time: ${timer}s`
    }, 1000)
    return timer
}

// When play is clicked, start time and generate zombie

const handlePlay = () => {
    startTimer()
    spawnZombie()
} 

const renderOutcome = () => {
    defeatedZombieWords.length >= winCondition ? titleEl.textContent = "You Win!" && clearInterval(startTimer)
    : timer <= 0 ? titleEl.textContent = "You Lose"
    : spawnZombie()
}


// event delegation for buttons

const handleButtonClicks = (event) => {
    const button = event.target
    const buttonText = button.textContent

    switch (true) {
        case button.classList.contains("play"):
            handlePlay()
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
