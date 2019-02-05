console.log('js loaded');

const board = document.querySelector('.gameBoard');
const startButton = document.querySelector('button');
const body = document.querySelector('body');
//so i can remove them after clicking start
// const instrBox = document.querySelector('.scoreInstr');
const section = document.querySelector('section');
const remBox = document.querySelector('.toRemove')
// const dropperObject = document.querySelector('.candyDropper');

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
  const theCandy = document.createElement('div');
  theCandy.classList.add('theCandy');
  board.appendChild(theCandy);
  return theCandy;
};
///Set position for candyPiece

const candyPosition = () => {
  const candyPos = `${dropper.offsetLeft + dropper.offsetWidth / 2}px`;
  return candyPos;
  console.log(candyPos);
}

const candyFire =(ev) => {

  if (ev.keyCode === 32) {
    console.log("space bar pressed");
    let theCandy = candyPiece();
    theCandy.style.left = candyPostion();
};

};
  body.addEventListener('keydown', candyFire);

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
