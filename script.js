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
//////////////Start of the game//////////////
const startDropper = () => {
  const dropper = document.createElement('div');
    dropper.classList.add('candyDropper');
    board.appendChild(dropper);
};
////// Create the walls/////////////
const mkWalls = () => {

  const walls = document.createElement('div');
  const wallLeft = document.createElement('div');
  const wallRight = document.createElement('div');
    walls.classList.add('walls');
    wallLeft.classList.add('wallLeft');
    wallRight.classList.add('wallRight');
    console.log(walls);
    board.appendChild(walls);
    walls.appendChild(wallLeft);
    walls.appendChild(wallRight);
};

startButton.addEventListener('click', (startDropper));
startButton.addEventListener('click', (mkWalls));
