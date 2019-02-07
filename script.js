const board = document.querySelector('.gameBoard');
const startButton = document.querySelector('button');
const body = document.querySelector('body');
const box = document.querySelector('box');
const remBox = document.querySelector('.toRemove')
const newCandyPiece = document.querySelectorAll('theCandy');
const walls = document.querySelector('.walls');
const wallLeft = document.querySelector('.wallLeft');
const wallRight = document.querySelector('.wallRight');
const scoreBoardDivL = document.querySelector('.scoreBoard');
const livesBoardDivR = document.querySelector('.livesBoard');
let dropper = document.querySelector('.candyDropper');

const removeInstrBox = () => {
  remBox.style.display = 'none';
}

//show walls
const blockAppear = () => {
  wallLeft.style.display = 'block';
  wallRight.style.display = 'block';
}
//hide walls
const blockGone = () => {
  wallLeft.style.display = 'none';
  wallRight.style.display = 'none';
}
//score and lives count
let score = 0;
let lives = 5;
//display score//
const dispScoreLives =() => {
  scoreBoardDivL.innerHTML = (`Score: ${score}`);
  livesBoardDivR.innerHTML = (`Lives: ${lives}`);
};
//hitwall condition
const hitWall = () => {
  lives -= 1;//must put in function
  dispScoreLives();
  checkCond();
  // clearInterval(timer);
}
//score condition
const bullsEye = () => {
  score += 1;
  dispScoreLives();
  // clearInterval(timer);
}

//collision detection
const collisionDetection = (candy) => {
    if (candy.offsetTop + candy.offsetHeight > wallLeft.offsetHeight + 485 && candy.offsetLeft <  wallLeft.offsetWidth)  {
    console.log('you hit left wall');
    candy.remove();
    hitWall();
  } else if (candy.offsetTop + candy.offsetHeight > wallRight.offsetHeight + 485 && candy.offsetLeft + candy.offsetWidth > wallRight.offsetLeft) {
    console.log('you hit right wall');
    candy.remove();
    hitWall();
  } else if (candy.offsetTop + candy.offsetHeight >= walls.offsetTop + walls.offsetHeight) {
    candy.remove();
    bullsEye();
  }
};
//check lose win condition
const checkCond = () => {
  if (lives == 0) {
    youLose();
  }
};
//lose actions
const youLose = () => {
  alert('Sorry, you lost!'); // change this to display on screen innerHTML
  remBox.style.display = 'inline-flex';
  blockGone();
  dropper.remove();
  lives = 5;
  score = 0;
}
//increase speed of dropperBox
// const speedUp = () => {
//   if (score >= 5) {
//     dropper.style.animationDuration = '1s';
//   }
// }
const speedUp = () => {
  if (score == 5) {
    dropper.style.animationDuration = '3.0s';
  }else if (score == 15) {
    dropper.style.animationDuration = '2.5s';
  }else if (score == 20) {
    dropper.style.animationDuration = '1.5s';
  }
};


////////////Create the candy dropper//////////////
const startDropper = () => {
  const dropperBox = document.createElement('div');
    dropperBox.classList.add('dropperBox')
    dropper = document.createElement('div');
    dropper.classList.add('candyDropper');
    board.appendChild(dropperBox);
    dropperBox.appendChild(dropper);
}
///Create the dropping candy piece
const candyPiece = () => {

  theCandy = document.createElement('div');
  theCandy.classList.add('theCandy');
  return theCandy;
};

//dropping candy//
const moveCandy = (candy) => {
  speedUp();
  collisionDetection(theCandy);
  if (candy.offsetTop + candy.offsetHeight < board.offsetHeight) {

    candy.style.top = `${candy.offsetTop + 10}px`;
  } else if (candy.offsetTop + candy.offsetHeight >= board.offsetHeight) {
    candy.remove();
    clearInterval(timer);
  }
};


///Set position for candyPiece
const candyPosition = () => {

  let candyPos = `${dropper.offsetLeft + dropper.offsetTop}px`;
  const theCandyMade = candyPiece(); // saving to the piece that was created
  board.appendChild(theCandyMade);
  theCandyMade.style.left = candyPos;// setting the created piece to the px postion
  let timer = setInterval(moveCandy, 20, theCandyMade);
};
//Spacekey for dropping candy
const candyFire =(ev) => {
    if (ev.keyCode === 32) {

      candyPosition();
    }
    // setTimeout(function (candyFire) {
    //   console.log("shoot")
    // }, 2000);
};
//start the game //
const playGame = () => {
  body.addEventListener('keydown', candyFire);
}
playGame();

const beginGame = () => {
  startButton.addEventListener('click', startDropper);
  startButton.addEventListener('click', blockAppear);
  startButton.addEventListener('click', candyPiece);
  startButton.addEventListener('click', (removeInstrBox));
  startButton.addEventListener('click', (dispScoreLives));
};
beginGame();
