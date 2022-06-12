# MARIO-SMACK

- A HTML/CSS/JS game that consists of two characters: Mario and Bowser (nintendo owns all copyrights). The player takes the role of Mario, who has to 'POW' Bowser 50 times before the clock runs out.

[STEPS]

- If live-server extension is available, download the project and 'go live'.

- Alternatively, manually open it on the browser.

- This is a desktop project.

[CONTROLS]

- Space bar: Hammer action
- Arrows: Mario movement

[WIN-LOSE-CONDITIONS]

- If the timer reaches zero, it is game over.

- Mario has an allowance of 5 misses. Each time Mario misses, the hammer count reduces. If the hammer cout reaches zero, it is game over

- Bowser pops out randomly on top of the pipes. If Mario happens to be on top on the pipe at the same time Bowser is also there, it is game over.

- When Mario successfully scores 50 'POWS' and the previous conditions weren't met, Player wins

# THE PROJECT

- This project is very special to me as I built it on my third week learning JS. I kept the code UNTOUCHED as it reminds me of where I started, keeping me humble and motivated to improve.

[THE-IDEA]

- When learning JS I began doing research on JS beginner projects and dicovered 'Whack-a-mole'. It's a game I personally find extremly boring and consists of a 'mole' appearing at random on the screen, and upon mouse-click the player scores a point.

- The game was so unappealing to me that I left at that. I then opened a blank project where the only element I had was a button.

[THE-BUTTON-MOVED]

- I focused on learning key-press events that day, and suddenly...the button moved its own width to the left. The button almost instantly became an img of Mario, and from there...Mario Whack was born.

[TWO-DAYS]

- I coded the game on a single day so I wouldn't lose my train of thought. The next day I 'refined' it and had my son play. Teenager approved.

# STRUCTURE

[HTML]

- The html in this project is very basic consisting of mostly imgs of pipes, blocks, and well...the characters.

- On the 'refining' day, when I decided to limit hammers and add score, those got added to the html.

[CSS]

- CSS is actually what made this game possible. Grid to be specific, was the way I found to basically 'map' the screen, and used it in JS as coordinates for the character's position, and 'clash' logic.

[JS]

- As usual, it began by querying the html elements. #START

- A timer variable waas declared to be used later on the logic #TIMER

- When the game is over, a window reload takes place #Reload

- Variables to track hammers and pows were declared, as well game over #Hammer and Score and isItOver

[MARIO-BASICS]

- The map created with the grid implements two levels ('bottom', 'top') where the characters can be at

- Mario has to have a beginning row position, as well as column position, which is mapped to 8

- Mario also needs to be able to face right and face left upon key-press while standing in the same block, like in the original game

- Mario needs to have his current facing position tracked for conditionals later on #MARIO

[BOWSER-BASICS]

- Bowser only faces right, and therefore simplifies how he is originally set. All he needs is a beginning column and row position #BOWSER

[COLUMNS-ROWS]

- Created variable for all rows and columns

[SWITCH]

- The switch statement you see is what keeps track of mario position on the grid

- If at any point his and Bowser's coordinates match, doesBowserWin() will call a game over #Determine Mario Col Position

[MARIO-FACING-LEFT-RIGHT]

- Logic that will change Marios img src depending on which direction he is facing

[marioLeftRightMovements]

- Implements key press event that moves Mario on the x axis

[determineRowPosition]

- Tracks if Mario is at the 'bottom' or at the 'top' level

[marioMovementsUpDown]

- Implements key press event that moves Mario on the y axis

[smashMovement]

- Implements key press event to 'POW'

- Determines which img to use based on which direction Mario is facing, and changes Bowser img if scored

- Moves mario one space forward when attacking to avoid having mario attacking his own 'block'

[BOWSER-positionArr]

- Those, track Bowser position on the grid to check for 'clash'

- His position is randomized for column and row

[BOWSER-SWITCH]

- Server the same purpose as the previous switch, will always track the coordinates of Bowser current position

[DISPLAY-ENEMY]

- It what applies all functions for Bowser to move

[SCORE]

- Tracks the score of actual successful 'POWs'

[GAME-OVER]

- Toggles the screen which will render a text according to the condition met for game over

- It also reloeads the window after a time out

- It is also a major source for bugs, but as I mentioned before, I'm leaving this code UNTOUCHED

[HAPPY-UP-TO-THIS-POINT]

- You can see a comment that reads 'happy up to this point'. That is because, after that point I implement a setInterval with a clearInterval that drove me absolutely insane. Extremely poorly made, but honest hard work.

# WE CAN'T FORGET WHERE WE STARTED

- Aryse G. Tansy
  medic1111@gmail.com
