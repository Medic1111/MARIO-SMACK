"use strict";

// START
const intro = document.querySelector("#intro");
const feedback = document.querySelector("#feedback");
const startBtn = document.querySelector("#start");
const main = document.querySelector("#main");
const text = document.querySelector("#text");

// TIMER:
const timerEl = document.querySelector("#timer");
let time = 60;

// Reload
const reloadWindow = () => {
  window.location.reload();
};

// Hammer and Score and isItOver:
const scoreEl = document.querySelector("#score");
const hammer = document.querySelector("#hammer");
let scoreNum = 0;
let hammerNum = 5;
let isItOver = false;

// MARIO:
const mario = document.querySelector("#mario");
let marioPreviousPos;
let marioAttackPos;
let facingRight = false;
let facingLeft = true;
let hasTurnedLeft = true;
let hasTurnedRight = false;
let marioColPos = 8;
let marioCurrentLevelPosition = "bottom";
let marioRowPos = 2;

// BOWSER
const bowser = document.querySelector("#bowser");
let bowserColPos = 1;
let bowserRowPosition = 2;
let bowserCurrentLevelPosition = "bottom";

// COLUMNS:
const col1 = 1 + "/" + 2;
const col2 = 2 + "/" + 3;
const col3 = 3 + "/" + 4;
const col4 = 4 + "/" + 5;
const col5 = 5 + "/" + 6;
const col6 = 6 + "/" + 7;
const col7 = 7 + "/" + 8;
const col8 = 8 + "/" + 9;

// ROWS:
const row1 = 3 + "/" + 4;
const row2 = 5 + "/" + 6;

// Determine Mario Col Position:

const determineColPosition = (marioColPos) => {
  switch (marioColPos) {
    case 8:
      mario.style.gridColumn = col8;
      break;
    case 7:
      mario.style.gridColumn = col7;
      break;
    case 6:
      mario.style.gridColumn = col6;
      break;
    case 5:
      mario.style.gridColumn = col5;
      break;
    case 4:
      mario.style.gridColumn = col4;
      break;
    case 3:
      mario.style.gridColumn = col3;
      break;
    case 2:
      mario.style.gridColumn = col2;
      break;
    case 1:
      mario.style.gridColumn = col1;
      break;
  }
  doesBowserWin();
};

// Mario Left and Right Mov.

const isNowFacingLeft = () => {
  facingLeft = true;
  facingRight = false;
  mario.src = "/img/mariorun.png";
};

const isNowFacingRight = () => {
  facingRight = true;
  facingLeft = false;
  mario.src = "/img/marioright.png";
};

const marioLeftRightMovements = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && marioColPos > 1 && hasTurnedLeft === true) {
      isNowFacingLeft();
      marioColPos -= 1;
      determineColPosition(marioColPos);
      marioPreviousPos = marioColPos + 1;
    } else if (
      e.key === "ArrowRight" &&
      marioColPos < 8 &&
      hasTurnedRight === true
    ) {
      isNowFacingRight();
      marioColPos += 1;
      marioPreviousPos = marioColPos - 1;
      determineColPosition(marioColPos);
    } else if (e.key === "ArrowLeft") {
      isNowFacingLeft();
      hasTurnedLeft = true;
      hasTurnedRight = false;
    } else if (e.key === "ArrowRight") {
      isNowFacingRight();
      hasTurnedRight = true;
      hasTurnedLeft = false;
    }
  });
};

marioLeftRightMovements();

// Determine Mario Row Position:

const determineRowPosition = () => {
  if (marioRowPos === 2) {
    mario.style.gridRow = row2;
    marioCurrentLevelPosition = "bottom";
  } else if (marioRowPos === 1) {
    mario.style.gridRow = row1;
    marioCurrentLevelPosition = "top";
  }
  doesBowserWin();
};

const marioMovementsUpDown = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && marioRowPos === 2) {
      marioRowPos -= 1;
      determineRowPosition();
    } else if (e.key === "ArrowDown" && marioRowPos === 1) {
      marioRowPos += 1;
      determineRowPosition();
    }
  });
};
marioMovementsUpDown();

// SMASH
const smashMovement = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === " " && isItOver === false) {
      if (facingLeft === true) {
        mario.src = "/img/smash.png";
        mario.style.gridColumn = marioColPos - 1;
        marioAttackPos = marioColPos - 1;
      } else if (facingRight === true) {
        mario.src = "/img/attackright.png";
        mario.style.gridColumn = marioColPos + 1;
        marioAttackPos = marioColPos + 1;
      }
      if (
        marioAttackPos === bowserColPos &&
        marioCurrentLevelPosition === bowserCurrentLevelPosition &&
        isItOver === false
      ) {
        bowser.src = "/img/pow.png";
      } else {
        hammerNum--;
        hammer.textContent = hammerNum;
      }
      gameOver();
      score();
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.key === " ") {
      if (facingLeft === true) {
        mario.src = "/img/mariorun.png";
      } else if (facingRight === true) {
        mario.src = "/img/marioright.png";
      }
      bowser.src = "/img/bowser2.png";
      mario.style.gridColumn = marioColPos;
    }
  });
};

// BOWSER

const positionArr = [col1, col3, col5, col7];
const positionTopArr = [row2, row1];

// BOWSER WINS:
const doesBowserWin = () => {
  if (
    marioColPos === bowserColPos &&
    marioCurrentLevelPosition === bowserCurrentLevelPosition
  ) {
    overToggle();
    feedback.textContent = "You ran into Bowser";
  }
};

// Random col
const randomPosition = () => Math.floor(Math.random() * positionArr.length);
// Random row
const randomTopPosition = () =>
  Math.floor(Math.random() * positionTopArr.length);

// Which COL is BOWSER

const determineBowserCol = () => {
  let enemyPosIndex = randomPosition();
  bowser.style.gridColumn = positionArr[enemyPosIndex];

  switch (enemyPosIndex) {
    case 0:
      bowserColPos = 1;
      break;
    case 1:
      bowserColPos = 3;
      break;
    case 2:
      bowserColPos = 5;
      break;
    case 3:
      bowserColPos = 7;
      break;
  }
  doesBowserWin();
};

// Which ROW is BOWSER

const determineBowserRow = () => {
  let enemyTopIndex = randomTopPosition();
  bowser.style.gridRow = positionTopArr[enemyTopIndex];
  enemyTopIndex === 0
    ? (bowserCurrentLevelPosition = "bottom")
    : (bowserCurrentLevelPosition = "top");
  doesBowserWin();
};

// START GAME WITH:
const displayEnemy = () => {
  !isItOver ? doesBowserWin() : null;
  determineBowserCol();
  determineBowserRow();
};

// SCORE

const score = () => {
  if (
    marioAttackPos === bowserColPos &&
    marioCurrentLevelPosition === bowserCurrentLevelPosition
  ) {
    scoreNum++;
    scoreEl.textContent = scoreNum;
  }
};

//Game over:
const overToggle = () => {
  isItOver = true;
  startBtn.classList.toggle("hidden");
  text.classList.toggle("hidden");
  main.classList.toggle("hidden");
  intro.classList.toggle("hidden");
  setTimeout(reloadWindow, 3000);
};

const gameOver = () => {
  if (hammerNum <= 0) {
    overToggle();
    feedback.textContent = "No more Hammers";
  } else if (scoreNum >= 49 && hammerNum === 5) {
    overToggle();
    feedback.textContent = "PERFECT SCORE!";
  } else if (scoreNum >= 49) {
    overToggle();
    feedback.textContent = "You WIN!";
  }
};

// HAPPY UP TO THIS POINT

startBtn.addEventListener("click", () => {
  intro.classList.toggle("hidden");
  main.classList.toggle("hidden");
  smashMovement();
  setInterval(displayEnemy, 1500);
  timer(test);
});

// TIMER:

const test = () => {
  time--;
  timerEl.textContent = time;
  if (isItOver === false) {
    if (time === 0) {
      overToggle();
      feedback.textContent = "Time is up!";
      clearInterval(timer);
    }
  }
};

const timer = (a) => {
  setInterval(a, 1000);
};
