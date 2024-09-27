// Attempts at additional functions that did not make the final submission




/* audio

<!--
<button type="button" class="unmuted">🔊</button>
<button type="button" class="muted">🔇</button>  
<audio id="game-audio" autoplay loop>
    <source src="./assets/nebula-nights-adi-goldstein-main-version-33801-01-23.mp3" type="audio/mpeg">
</audio>
--> */

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

/* level up 
const levelUp = () => {
    removeAllZombies()
    // push words back to wordList
    // levelUp(modal) with a continue button
    playerLevel++
    init()
    // level up modal
}

const renderOutcome = () => {
//  ...
    : defeatedZombieWords.length >= winConditions[playerLevel - 1] ? levelUp()
//  ...
}

const handleReset = () => {
//  ...
    playerLevel = 1
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

