let defeatedZombieWords = []
// const zombieMovements = ["position8", "position9"]
const zombieMovements = ["position0", "position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8", "position9", "position10", "position11", "position12", "position13", "position14"]
const winCondition = [10, 20, 30, 40] // # of Zombie Words in defeatedZombieWords
let playerLevel = 4
const wordObj = wordBank.find((wordLevel) => wordLevel.level === playerLevel)
const wordList = wordObj.vocab
let zombieWord = ""
let timer = 30
let timeBonus = 3
let gameTimerID
let killCount = defeatedZombieWords.length


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
const respawnZombie = () => {
    const zombieDiv = document.createElement("div")
    zombieDiv.classList.add("zombie")
    zombieDiv.classList.add(zombieMovements[Math.floor(Math.random()*zombieMovements.length)])
    console.log(zombieDiv)

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

    Object.assign(zombieDiv.style {
    position = "absolute"
    }
    
    zombieCon.appendChild(zombieDiv)
}



const spawnZombie = () => {
    for (let i = 1; i <= playerLevel; i++) {
        respawnZombie()
    }

}

// remove zombie elements from screen
const removeZombie = (zombieWord) => {
    const zombieEls = document.querySelectorAll(".zombie")
    zombieEls.forEach((zombie) => {
        if (zombie.getAttribute('data-word') === zombieWord) {
            zombie.remove()
            playerEl.value = ""
        }
    })
}

// when zombie text is precisely matched in input, remove element and increase kill count
const killZombie = () => {
    const firepower = playerEl.value.trim()
    const zombieEls = document.querySelectorAll(".zombie")

    zombieEls.forEach((zombie) => {
        if (zombie.getAttribute("data-word") === firepower) {
            killCount++
            scoreEl.textContent = `Kill Count: ${killCount}`
            timer += timeBonus
            defeatedZombieWords.push(firepower)
            removeZombie(firepower)
            renderOutcome()
        }
    })
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
    : respawnZombie()
}


const init = () => {
    // why are there zombies not all disappearing during reset
    defeatedZombieWords.push(zombieWord)
    zombieWord = ""
    defeatedZombieWords.forEach((word) => { 
        if(!wordList.includes(word)) wordList.push(word)
    })
    defeatedZombieWords = []
    clearInterval(gameTimerID)
    timer = 30
    timerEl.textContent = `Time: ${timer}s`
    killCount = defeatedZombieWords.length
    scoreEl.textContent = `Kill Count: ${killCount}`
    playerEl.value = ""
    titleEl.textContent = "The Typing of the Dead"
    if (document.querySelector(".zombie")) zombieCon.removeChild(document.querySelector(".zombie"))
}

// Reset to initial settings
const handleReset = () => {
    document.querySelector(".reset").classList.add("invisible")
    document.querySelector(".play").classList.remove("invisible")
    playerLevel = 1
    init()

}

const levelUp = () => {
    playerLevel ++
    init()
    // level up modal
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
