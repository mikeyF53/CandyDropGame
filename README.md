# Project 1 Candy Drop


## Instructions
Objective of this game is to carefully time the movement of the Candy Dropper to drop a piece of candy between the bottom opening.

## Wireframe
*Add drawing*


## Main
A candy dropper will move left and right at an certain speed interval. Pressing the spacebar and a mouseclick will release a candy. The goal is to drop it into the bottom opening without touching the walls. Each candy collected will give you one point. Every 5 levels will increase the speed of the Candy Dropper. You will have 10 lives per game, game is over when you lose all lives.

## Technologies
JavaScript, HTML, and CSS.

## Obstacles
Obstacles I had to overcome were, collision detection on every dropping candy, and also moving the candy piece itself downwards.

## Solutions
I used offset methods to find the point of the candy as well as the walls to create a detection function. Offset was also used to move the candy piece downwards with a, if statement.

## Code Snippet

```const collisionDetection = (candy) => {
    if (candy.offsetTop + candy.offsetHeight > wallLeft.offsetHeight + 485 && candy.offsetLeft <  wallLeft.offsetWidth)  {
    candy.remove();
    hitWall();
  } else if (candy.offsetTop + candy.offsetHeight > wallRight.offsetHeight + 485 && candy.offsetLeft + candy.offsetWidth > wallRight.offsetLeft) {
    candy.remove();
    hitWall();
  } else if (candy.offsetTop + candy.offsetHeight >= walls.offsetTop + walls.offsetHeight) {
    candy.remove();
    bullsEye();
  }
};```

This is my collision detection function. Initially I had a lot of issues understanding the concept with offset and how it worked. Drawing it out on whiteboard had help me visualize what it was giving me.
