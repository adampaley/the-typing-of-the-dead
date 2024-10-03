// Attempts at additional functions that did not make the final submission


/* indivudal zombie time out + lives + additional lose condition

<!-- <div id="lives">🫀🫀🫀🫀🫀</div> -->

let livesLeft = 5

const livesEl = document.querySelector("#lives")

const updateLives = () => {
  livesEl.textContent = "❤️".repeat(livesLeft)
}


const respawnZombie = () => {

//    ...
const zombieTime = document.createElement("div")
zombieTime.classList.add("zombie-time")
zombieTime.textContent = "15s"

let zombieTimer = 15
const zombieTimerInt = setInterval(() => {
    zombieTimer--
    zombieTime.textContent = `${zombieTimer}s`

    if (zombieTimer <=0) {
        clearInterval(zombieTimerInt)
        zombieDiv.remove()
        if (lives > 0) {
            livesLeft--
            updateLives()
            respawnZombie()
            renderOutcome()
        }
    }
}, 1000)

//  ...
zombieDiv.appendChild(zombieTime)
//  ...
}


const renderOutcome = () => {
//  ...
    : livesLeft <= 0 ? playerLoses()
//  ...
}

*/

/* Settings


<button type="button" class="settings">⚙️ Settings</button>


const handleButtonClicks = (event) => {
    const button = event.target
    const buttonText = button.textContent

    switch (true) {

//      ...

        case button.classList.contains("settings"):
            console.log("handleSettings()")
            break

//      ...
    } 
}

*/

/*
// Render zombie with all visual elements and necessary attributes
const respawnZombie = (spot = null) => {

    // Create HTML element
    const zombieDiv = document.createElement("div")
    zombieDiv.classList.add("zombie")

    // set width
    let divWidth = `${100/playerLevel}%`

    Object.assign(zombieDiv.style, {
        width: divWidth,
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
    })

    // Set zombie animation
    zombieDiv.classList.add(zombieMovements[Math.floor(Math.random()*zombieMovements.length)])

    // Make zombie sprite
    const zombieImg = document.createElement("img")
    zombieImg.classList.add("zombie-render")
    zombieImg.src = "./assets/generic-zombie-sprite.webp"
    zombieImg.alt = "Zombie featuring the word: "

    // Attach zombie word as attribute
    zombieWord = getRandomWord()
    zombieDiv.setAttribute('data-word', zombieWord)

    // Set the spot attribute
    const zombieSpot = spot !== null ? spot : playerLevel; 
    zombieDiv.setAttribute('spot', zombieSpot);

    // Make zombie word visible
    const zombieText = document.createElement("div")
    zombieText.classList.add("zombie-text")
    zombieText.textContent = zombieWord

    // Attach sprite and word to HTML element
    zombieDiv.appendChild(zombieImg)
    zombieDiv.appendChild(zombieText)

    // Place in container
    if (spot !== null) {
        const isAZombie = zombieCon.querySelector(`[spot="${spot}"]`)
        if (isAZombie) {
            zombieCon.insertBefore(zombieDiv, isAZombie)
            return
        }
    } else {
        zombieCon.appendChild(zombieDiv)
    }
}


// Set number of zombies equal to game level/difficulty
const spawnZombie = () => {
    for (let i = 1; i <= playerLevel; i++) {
        respawnZombie(i)
    }
}


// Ensures any zombie can be defeated at any time, resets player input
const removeZombie = (zombieWord) => {
    const zombieEls = document.querySelectorAll(".zombie")
    let zombieSpot = null;

    zombieEls.forEach((zombie) => {
        if (zombie.getAttribute('data-word') === zombieWord) {
            zombieSpot = zombie.getAttribute('spot')
            zombie.remove()
            playerEl.value = ""
        }
    })
    return zombieSpot
} 
*/

