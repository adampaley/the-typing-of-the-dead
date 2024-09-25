let defeatedZombieWords = []
const winCondition = [10, 20, 30, 40] // # of Zombie Words in defeatedZombieWords
let playerLevel = 1
const wordObj = wordBank.find((wordLevel) => wordLevel.level === playerLevel)
const wordList = wordObj.vocab
let zombieWord = ""
let timer = 30
let timeBonus = 3
let gameTimerID
let score = 0

const buttonEl = document.querySelectorAll(".game-buttons button")
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
    zombieDiv.classList.add("zombie", "position")

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

    const zombieConDim = zombieCon.getBoundingClientRect()

    const zombieConDimX = Math.random() * (zombieConDim.width) + (Math.random() > 0.5 ? 200: -200)
    const zombieConDimY = Math.random() * (zombieConDim.height) + (Math.random() > 0.5 ? 200: -200)

    const zombieX = Math.min(Math.max(zombieConDimX, 0), zombieConDim.width - 200)
    const zombieY = Math.min(Math.max(zombieConDimY, 0), zombieConDim.height - 200)

    zombieDiv.style.position = "absolute"
    zombieDiv.style.left = `${zombieX}px`
    zombieDiv.style.top = `${zombieY}px`

    zombieCon.appendChild(zombieDiv)
}

// const zombieHorde = setInterval(() => {
//     if (playerLevel >= 2 && wordList.length > 0) {
//        spawnZombie()
//     }  else {
//         clearInterval(zombieHorde)
//     }
//     timerEl.textContent = `Time: ${timer}s`
// }, 6000)


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
        timer += timeBonus
        defeatedZombieWords.push(zombieWord)
        removeZombie()
        renderOutcome()
    }

}

// start timer

const startTimer = () => {
    gameTimerID = setInterval(() => {
        if (timer <= 0) {
            clearInterval(gameTimerID)
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
    document.querySelector(".reset").classList.remove("invisible")
    document.querySelector(".play").classList.add("invisible")

} 

const renderOutcome = () => {
    defeatedZombieWords.length >= winCondition[playerLevel - 1] ? (titleEl.textContent = "You Win!", clearInterval(gameTimerID))
    : timer <= 0 ? titleEl.textContent = "You Lose"
    : spawnZombie()
}

// Reset to initial settings
const handleReset = () => {
    document.querySelector(".reset").classList.add("invisible")
    document.querySelector(".play").classList.remove("invisible")
    playerLevel = 1
    defeatedZombieWords.push(zombieWord)
    zombieWord = ""
    defeatedZombieWords.forEach((word) => { 
        if(!wordList.includes(word)) wordList.push(word)
    })
    defeatedZombieWords = []
    clearInterval(gameTimerID)
    timer = 30
    timerEl.textContent = `Time: ${timer}s`
    score = 0
    scoreEl.textContent = `Score: ${score}`
    playerEl.value = ""
    titleEl.textContent = "The Typing of the Dead"
    if (document.querySelector(".zombie")) zombieCon.removeChild(document.querySelector(".zombie"))
}

const handleInstructions = () => {
    const modal = document.querySelector("#instructionsModal") 
    modal.style.display = "block"

    buttonEl.forEach(button => {
        button.disabled = true; 
    });

    const closeButton = document.querySelector(".close-button")
    closeButton.onclick = () => {
        modal.style.display = "none"
        
        buttonEl.forEach(button => {
            button.disabled = false; 
        });
    }

    window.onclick = (event) => { // doesn't work if I click outside the modal div
        if (event.target === modal) {
            modal.style.display = "none"
                buttonEl.forEach(button => {
                button.disabled = false; 
            });
        }
    }
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
            handleInstructions()
            break
        case button.classList.contains("settings"):
            console.log("handleSettings()")
            break
        case button.classList.contains("reset"):
            handleReset()
            break
        default:
            return
    } 
}

buttonEl.forEach(button => button.addEventListener('click', handleButtonClicks))
playerEl.addEventListener("input", killZombie)
