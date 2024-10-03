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

        HTML
                    <br>
                    <label>
                        <input type="checkbox" id="stopAnimationCheckbox"> Stop Animations
                    </label>
}

*/

/* Global High Score

Will return to this when I know more about APIs and Back-End Dev

*/