const board = document.querySelector('.gameBoard');
const startButton = document.querySelector('button');
const body = document.querySelector('body');
const box = document.querySelector('box');
const remBox = document.querySelector('.toRemove')
const newCandyPiece = document.querySelector('.theCandyMade');
const walls = document.querySelector('.walls');
const wallLeft = document.querySelector('.wallLeft');
const wallRight = document.querySelector('.wallRight');
const scoreBoardDivL = document.querySelector('.scoreBoard');
const livesBoardDivR = document.querySelector('.livesBoard');
let dropper = document.querySelector('.candyDropper');
const speedDiv = document.querySelector('.speedUpBox');

//remove the start page elements
const removeInstrBox = () => {
  remBox.style.display = 'none';
};
//show walls
const blockAppear = () => {
  wallLeft.style.display = 'block';
  wallRight.style.display = 'block';
};
//hide walls
const blockGone = () => {
  wallLeft.style.display = 'none';
  wallRight.style.display = 'none';
};
//score and lives count
let score = 0;
let lives = 10;
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
};
//score condition
const bullsEye = () => {
  score += 1;
  dispScoreLives();
};
//collision detection
const collisionDetection = (candy) => {
    if (candy.offsetTop + candy.offsetHeight > wallLeft.offsetHeight + 485 && candy.offsetLeft <  wallLeft.offsetWidth)  {
    candy.remove();
    hitWall();
  } else if (candy.offsetTop + candy.offsetHeight > wallRight.offsetHeight + 485 && candy.offsetLeft + candy.offsetWidth > wallRight.offsetLeft) {
    candy.remove();
    hitWall();
  } else if (candy.offsetTop + candy.offsetHeight >= walls.offsetTop + walls.offsetHeight) {
    candy.remove();
    bullsEye();
    speedUp();
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
  alert(`Sorry, you lost! Your score was ${score}`); // change this to display on screen innerHTML
  location.reload()
  lives = 11;
  score = 0;
  speed = 3.5
};
//increase the speed every 5 points//
  let speed = 3.5;
const speedUp = () => {
  if (score !== 0 && score % 5 === 0) {
    speed -= 0.5
    document.querySelector('.speedUpBox').style.display = 'block' ;
  } else if (score !== 0 && score % 5 !== 0) {
    document.querySelector('.speedUpBox').style.display = 'none' ;
  }
  dropper.style.animationDuration = `${speed}s`
}

////////////Create the candy dropper//////////////
const startDropper = () => {
  const dropperBox = document.createElement('div');
    dropperBox.classList.add('dropperBox')
    dropper = document.createElement('div');
    dropper.classList.add('candyDropper');
    board.appendChild(dropperBox);
    dropperBox.appendChild(dropper);
///speed up text animation at every 5
    const mkTextBox = document.createElement('div');
    mkTextBox.classList.add('speedUpBox');
    dropperBox.appendChild(mkTextBox);
    mkTextBox.innerHTML = ('  SPEED UP!!!!')

    //const speedText = document.querySelector('')
};
///Create the dropping candy piece
const candyPiece = () => {
  theCandy = document.createElement('div');
  theCandy.classList.add('theCandy');
  return theCandy;
};
//dropping candy//
const moveCandy = (candy) => {
  collisionDetection(theCandy);
  if (candy.offsetTop + candy.offsetHeight < board.offsetHeight) {
    candy.style.top = `${candy.offsetTop + 7}px`;
  } else if (candy.offsetTop + candy.offsetHeight >= board.offsetHeight) {
    candy.remove();
    clearInterval(timer);
  }
};
///Making a candy and position for candyPiece
const candyPosition = () => {
  let candyPos = `${dropper.offsetLeft}px`;
  const theCandyMade = candyPiece(); // saving to the piece that was created
  board.appendChild(theCandyMade);
  theCandyMade.style.left = candyPos;// setting the created piece to the px postion
  let timer = setInterval(moveCandy, 15, theCandyMade);
};
//Spacekey for dropping candy
const candyFire =(ev) => {
    if (ev.keyCode === 32 &&  document.querySelector('.theCandy') == null) {
      candyPosition();
    }
};
//start the game //
const playGame = () => {
  body.addEventListener('keyup', candyFire);
};
playGame();

const beginGame = () => {
  startButton.addEventListener('click', startDropper);
  startButton.addEventListener('click', blockAppear);
  startButton.addEventListener('click', candyPiece);
  startButton.addEventListener('click', (removeInstrBox));
  startButton.addEventListener('click', (dispScoreLives));
};
beginGame();
