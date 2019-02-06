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
}
startButton.addEventListener('click', (removeInstrBox));

//show walls display block
const blockAppear = () => {
  wallLeft.style.display = 'block';
  wallRight.style.display = 'block';
}

//collision detection
const collisionDetection = (candy) => {
    if (candy.offsetTop + candy.offsetHeight > wallLeft.offsetHeight + 490 && candy.offsetLeft <  wallLeft.offsetWidth)  {
    console.log('you hit left wall');
    candy.remove();
    clearInterval(timer);
    }
   else if (candy.offsetTop + candy.offsetHeight > wallRight.offsetHeight + 490 && candy.offsetLeft + candy.offsetWidth > wallRight.offsetLeft) {
    console.log('you hit right wall');
    candy.remove();
    clearInterval(timer);
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
    candy.style.top = `${candy.offsetTop + 10}px`;
    console.log(candy.style.top);
  } else if (candy.offsetTop + candy.offsetHeight >= board.offsetHeight) {
    candy.remove();
    clearInterval(timer);
  }
};
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
