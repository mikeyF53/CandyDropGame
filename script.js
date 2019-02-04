console.log('js loaded');

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

const dropper = document.createElement('div dropper');
console.log(dropper);
