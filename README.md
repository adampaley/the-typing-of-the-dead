# the-typing-of-the-dead
![screenshot of gameplay](./assets/hero.png)

The Typing of the Dead is a browser-based adaptation of Sega's 1999 arcade game of the same name, recreated as an assignment for a General Assembly Software Engineering Bootcamp. 

### Why I Chose This Game

When deciding on a project, I wanted something unconventional that presents a cool interface for the player. 

When brainstorming ideas, I recalled different arcade games featured in the [National Videogame Museum](https://nvmusa.org/) in Dallas, Texas, which I visited in the summer of 2023. **The Typing of the Dead** stood out at the time, as an arcade shooter-based game depending on the typing-ability of the player seemed incredibly innovative and useful. Translating this to a DOM event, and adapting basic game mechanics to a browser-based game seemed like an ideal fit for my unit 1 project. 

## Basic Game Play
A simplified first-person shooter game, in which `zombies` generate randomly and you must type the words displayed to defeat them. 

Each time a player defeats a zombie, more time is added to the game. But these zombies won't just sit around waiting for you to read their weakness. So read fast and type quick, otherwise you will run out of time.

### Win/Lose Condition
The default version of the game features a `30 second timer` and a win condition of `20 zombies killed`. If the timer reaches `0`, you lose.

Play here: `https://the-typing-of-the-dead-browser.netlify.app/`

## Technologies Used
The following languages and technologies were implement to create this game: 
* JS
* HTML
* CSS
* DOM Manipulation

## Attributions
* Copyright Free Background Audio (not featured in deployed version): "Nebula Nights" - Adi Goldstein

## Next Steps
Potential features to be added on:
* Background Audio
* Settings
    * Limit Animations
    * Large Text
    * Mute/Unmute
* Levels
* Zombie Timer / Player Lives
* High Scores