console.log('js loaded');

const board = document.querySelector('.gameBoard');
const startButton = document.querySelector('button');
const body = document.querySelector('body');
//so i can remove them after clicking start
// const instrBox = document.querySelector('.scoreInstr');
const section = document.querySelector('section');
const remBox = document.querySelector('.toRemove')
const newCandyPiece = document.querySelectorAll('theCandy')
const wallLeft = document.querySelector('.wallLeft')
const wallRight = document.querySelector('.wallRight')

const removeInstrBox = () => {
  remBox.remove();

// document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e))
// for (i = 0; i < section.length; i++) {
//   section.removeChild;
}
startButton.addEventListener('click', (removeInstrBox));

//show walls display on
const blockAppear = () => {
  wallLeft.style.display = 'block';
  wallRight.style.display = 'block';
}

//get wall Position
const wallPos = (wall) => {
wallLeftPos = wallLeft.offsetTop;
//if (wallLeft.offsetTop + wallLeft.offsetHeight <

}
wallPos();
console.log(wallPos);
////////////Create the candy dropper//////////////
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

  return theCandy;
};

//dropping candy//
const moveCandy = (candy) => {

  if (candy.offsetTop + candy.offsetHeight < board.offsetHeight) {
    candy.style.top = `${candy.offsetTop + 10}px`;
    console.log(candy.style.top);
  } else if (candy.offsetTop + candy.offsetHeight >= board.offsetHeight) {
    console.log('moving candy');
    candy.remove();
    clearInterval(timer);

  }
}
///Set position for candyPiece
const candyPosition = () => {

  let candyPos = `${dropper.offsetLeft}px`; //only a number
  const theCandyMade = candyPiece(); // saving to the piece that was created
  board.appendChild(theCandyMade);
  theCandyMade.style.left = candyPos;// setting the created piece to the px postion
  timer = setInterval(moveCandy, 20, theCandyMade);
}
const candyFire =(ev) => {
  if (ev.keyCode === 32) {
      candyPosition();
}
};
const playGame = () => {
  body.addEventListener('keyup', candyFire);
}
playGame();
//start the game //
const beginGame = () => {
  startButton.addEventListener('click', startDropper);
  startButton.addEventListener('click', blockAppear);// must take display none back off
  startButton.addEventListener('click', candyPiece);
  startButton.addEventListener('click', (removeInstrBox));
};
beginGame();



//body.addEventListener('keydown', candyPiece);
