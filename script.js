console.log('js loaded');

const board = document.querySelector('.gameBoard');
const startButton = document.querySelector('button');
const body = document.querySelector('body');
//so i can remove them after clicking start
// const instrBox = document.querySelector('.scoreInstr');
const section = document.querySelector('section');
const remBox = document.querySelector('.toRemove')
const newCandyPiece = document.querySelector('theCandy')

const removeInstrBox = () => {
  remBox.remove();
  }
startButton.addEventListener('click', (removeInstrBox));

//////////////Create the candy dropper//////////////
const startDropper = () => {

  const dropperBox = document.createElement('div');
    dropperBox.classList.add('dropperBox')
    dropper = document.createElement('div');
    dropper.classList.add('candyDropper');
    board.appendChild(dropperBox);
    dropperBox.appendChild(dropper);

};

///Create the dropping candy piece
const candyPiece = () => {
  theCandy = document.createElement('div');
  theCandy.classList.add('theCandy');
  board.appendChild(theCandy);
  return theCandy;
};
//dropping candy//
const moveCandy = (candy) => {

  if (candy.offsetTop + candy.offsetHeight < board.offsetHeight) {
    candy.style.top = `${candy.offsetTop + 10}px`;
    console.log(candy.style.top);
  } else if (candy.offsetTop + candy.offsetHeight >= board.offsetHeight) {
    console.log('works');
    candy.remove();
    clearInterval(timer);

  }
}
///Set position for candyPiece
const candyPosition = () => {
  let candyPos = `${dropper.offsetLeft}px`; //only a number
  const theCandyMade = candyPiece(); // saving to the piece that was created
  theCandyMade.style.left = candyPos;// setting the created piece to the px postion
  timer = setInterval(moveCandy, 20, theCandyMade);
}
const candyFire =(ev) => {
  if (ev.keyCode === 32) {
      candyPosition();
};
};

//dropping the candy

// const dropCandy = () => {
//     const currentCandy = newCandyPiece.offsetTop;
//     console.log(currentCandy);
//     const currentCandyHeight = `${newCandyPiece.offsetHeight}px`;
// if (currentCandyTop + currentCandyHeight < `${board.offsetHeight}`) {
//   newCandyPiece.style.top = `${newCandyPiece.offsetTop} + 5` ;
// } else {
//   theCandy.remove();
// }
// setInterval(candyPiece, 50, );
// }

const playGame = () => {
body.addEventListener('keyup', candyFire);
}
playGame();
////// Create the walls/////////////
const mkWalls = () => {

  const walls = document.createElement('div');
  const wallLeft = document.createElement('div');
  const wallRight = document.createElement('div');
    walls.classList.add('walls');
    wallLeft.classList.add('wallLeft');
    wallRight.classList.add('wallRight');
     board.appendChild(walls);
     walls.appendChild(wallLeft);
     walls.appendChild(wallRight);
};

//start the game //
const beginGame = () => {
  startButton.addEventListener('click', startDropper);
  startButton.addEventListener('click', mkWalls);
//  startButton.addEventListener('click', candyPiece);
};

beginGame();



//body.addEventListener('keydown', candyPiece);
