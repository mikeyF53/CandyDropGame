console.log('js loaded');

const board = document.querySelector('.gameBoard');
const startButton = document.querySelector('button');
const body = document.querySelector('body');
//so i can remove them after clicking start
// const instrBox = document.querySelector('.scoreInstr');

const section = document.querySelector('section');
const remBox = document.querySelector('.toRemove')

const removeInstrBox = () => {
  remBox.remove();
  }
startButton.addEventListener('click', (removeInstrBox));

//////////////Carete the candy dropper//////////////
const startDropper = () => {
  const dropperBox = document.createElement('div');
    dropperBox.classList.add('dropperBox')
  const dropper = document.createElement('div');
    dropper.classList.add('candyDropper');
    board.appendChild(dropperBox);
    dropperBox.appendChild(dropper);

};
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

//Create the dropping candy piece///
const candyPiece = () => {
  const theCandy = document.createElement('div');
  theCandy.classList.add('theCandy');
  board.appendChild(theCandy);
};

//start the game //
const beginGame = () => {
  startButton.addEventListener('click', startDropper);
  startButton.addEventListener('click', mkWalls);
  startButton.addEventListener('click', candyPiece);
};

beginGame();



//body.addEventListener('keydown', candyPiece);
