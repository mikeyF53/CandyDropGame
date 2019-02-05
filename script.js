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
///Set position for candyPiece
const candyPosition = () => {

  const candyPos = `${dropper.offsetLeft}px`; //only a number
  const theCandyMade = candyPiece(); // saving to the piece that was created
  theCandyMade.style.left = candyPos;// setting the created piece to the px postion
//  let newCandyPos = `${newCandyPiece.offsetTop + newCandyPiece.offsetHeight}px`;
}
const candyFire =(ev) => {
  if (ev.keyCode === 32) {
      candyPosition();
};
};

//movement for candy

const dropCandy = () => {
    //const currentCandyTop = `${theCandy.offsetTop}`;
    //const currentCandyHeight = `${theCandy.offsetHeight}`;
if (`${newCandyPiece.offsetTop + newCandyPiece.offsetHeight < board.offsetHeight}`) {
  newCandyPiece.style.top = `${newCandyPiece.offsetTop}` + 5;
  console.log(newCandyPiece.offsetTop);
} else {
  theCandy.remove();
}
setInterval(candyPiece, 20, dropCandy);
}


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
