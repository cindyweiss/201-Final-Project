'use strict';

var attackChoices = ['sword', 'spell', 'shield'];

var currentUserChoice = '';

var badGuyChoice = '';

var winCountingArray = [0, 0]; // [0] is currentUser , [1] is badGuy

var turnCounter = 0;

var userHistory = []; // LS later

// Local storage into user vvv

var User = function (name) {
  this.name = name;
  this.winLossHistory = [0, 0];
};

var newUser = prompt('INPUT NAME: ');

var currentUser = new User(newUser); // test
console.log(`currentUser: ${currentUser}`);

// Evaluate Choices
// sword beats spell, spell beats shield, shield beats sword

function battleFunction() {
  while (!winCountingArray.includes(5)) {
    badGuyChoice = attackChoices[Math.floor(Math.random() * 3)];
    currentUserChoice = prompt('sword, spell, or shield: ');
    while (currentUserChoice === 'sword' || currentUserChoice === 'spell' || currentUserChoice === 'shield') {
      if (currentUserChoice === badGuyChoice) {
        alert('draw');
        turnCounter++;
      } else if ((currentUserChoice === 'sword' && badGuyChoice === 'spell') ||
        (currentUserChoice === 'spell' && badGuyChoice === 'shield') ||
        (currentUserChoice === 'shield' && badGuyChoice === 'sword')) {
        winCountingArray[0]++;
        turnCounter++;
        alert(`good point ${winCountingArray[0]}\n\ngood ${currentUserChoice}| bad ${badGuyChoice}`);
      } else {
        winCountingArray[1]++;
        turnCounter++;
        alert(`bad point ${winCountingArray[1]}\n\ngood ${currentUserChoice}| bad ${badGuyChoice}`);
      }
      currentUserChoice = '';
    }
  }

  alert(`reached 5, compare time ${winCountingArray}`);
  if (winCountingArray[0] > winCountingArray[1]) {
    currentUser.winLossHistory[0]++;
    console.log(`user Win Count: ${currentUser.winLossHistory[0]}`);

  } else if (winCountingArray[0] < winCountingArray[1]) {
    currentUser.winLossHistory[1]++;
    console.log(`user Loss Count: ${currentUser.winLossHistory[1]}`);
  } else {}
}

battleFunction();

// //Isaacs animation code - You guys can work above this

// // to do list
// // - make function that accurately iterates over the sprite sheet
// // - then make functions for each action.
// //     - today we'll just make a run animation.


// const SPRITE_SIZE = 32;

// var canvas = document.getElementById('gameScreen');
// var ctx = canvas.getContext('2d');


// //preloading all images
// var cloudImage = new Image();
// cloudImage.src = 'images/cloud1.png';

// var cloudImage2 = new Image();
// cloudImage2.src = 'images/cloud2.png';

// var cloudImage3 = new Image();
// cloudImage3.src = 'images/cloud3.png';

// var backgroundImg = new Image();
// backgroundImg.src = 'images/BG.png';

// var swordImg = new Image();
// swordImg.src = 'images/swordSprite.png';

// var shieldImg = new Image();
// shieldImg.src = 'images/shieldSprite.png';

// var spellImg = new Image();
// spellImg.src = 'images/spellSprite.png';

// // //put this in the render at the end - to isaac
// //gif instead

// var CharAnimation = function (frameSet) {
//   this.count = 0,
//     this.delay = 20,
//     this.frame = 0,
//     this.frameSet = frameSet,
//     this.frameIndex = 0,

//     this.change = function (frameSet, delay) {
//       if (this.frameSet !== frameSet) {

//         this.count = 0;
//         this.delay = delay;
//         this.frameIndex = 0;
//         this.frameSet = frameSet;
//         this.frame = frameSet[this.frameIndex];
//       }
//     },

//     this.update = function () {
//       this.count++;

//       if (this.count >= this.delay) {
//         this.count = 0;
//         //frame index is stuck at 0
//         if (this.frameIndex === 1) {
//           this.frameIndex = 0;
//         } else { this.frameIndex += 1; }
//       }
//       this.frame = this.frameSet[this.frameIndex];
//     };
// };

// var currentUserSpriteSheet = {
//   frameSet: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]],
//   image: new Image()

// };

// currentUserSpriteSheet.image.src = 'images/pallySheet.png';

// var currentUser = {
//   animation: new CharAnimation(currentUserSpriteSheet.frameSet),
//   height: 32,
//   width: 32,
//   x: 85,
//   y: 165

// };

// var loop = function () {
//   // i think this is where we will put our big condition statement
//   currentUser.animation.change(currentUserSpriteSheet.frameSet[2], 20);

//   ctx.drawImage(backgroundImg, 0, 0);
//   currentUser.animation.update();
//   ctx.drawImage(currentUserSpriteSheet.image, currentUser.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(currentUser.x), Math.floor(currentUser.y), SPRITE_SIZE, SPRITE_SIZE);

//   window.requestAnimationFrame(loop);

// };


// //the render function. we could probably put this in the constructor but it was working so i didnt touch it!
// function renderNewSprite(image, x, y) {
//   image.onload = function () {

//     ctx.drawImage(image, x, y);
//   };
// }

// //the constructor for new sprites on the canvas
// var Asset = function (image, x, y, velocity) {
//   this.image = image;
//   this.x = x;
//   this.y = y;
//   this.velocity = velocity;

//   renderNewSprite(image, x, y);
// };


// // creating all sprites

// var cloud1 = new Asset(cloudImage, 5, 5, 1);
// var cloud2 = new Asset(cloudImage2, 140, 7, 1);
// var cloud3 = new Asset(cloudImage3, 50, -20, 1);
// var sword = new Asset(swordImg, 21, 432, 1);
// var shield = new Asset(shieldImg, 321, 462, 1);
// var spell = new Asset(spellImg, 151, 432, 1);


// // cloud2.tickCount = 0;
// // cloud2.ticksPerFrame = options.ticksPerFrame || 0;
// // cloud2.moveClouds = function (velocity) {
// //     tickCount += 1;
// //     while (this.x <= 500) {
// //         this.x += velocity;
// //         if (this.x > 500) {
// //             this.x = -50;
// //         }
// //     }
// // }

// // cloud2.moveClouds(1);


// // var spriteSize = 32;

// // var spriteSheet = {

// //     frameSets: [[/* idle */],
// //     [/* gg Sword bg Sword */],
// //     [/* gg Sword bg Spell */],
// //     [/* gg Sword bg Shield */],
// //     [/* gg Spell bg Sword */],
// //     [/* gg Spell bg Spell */],
// //     [/* gg Spell bg S+hield */],
// //     [/* gg Shield bg Sword */],
// //     [/* gg Shield bg Spell */],
// //     [/* gg Shield bg Shield */],],


// // };


// currentUserSpriteSheet.image.addEventListener('load', function (event) {
//   window.requestAnimationFrame(loop);
// });































// // //character animation functions
// // function idle() {
// //     //plays idle animation


// // }

// // function ggSwordbgSword() {
// //     //plays animation
// // }

// // function ggSwordbgSpell() {
// //     //plays animation
// // }

// // function ggSwordbgSheild() {
// //     //plays animation
// // }

// // function ggShieldbgSword() {
// //     //plays animation
// // }

// // function ggShieldbgSpell() {
// //     //plays animation
// // }

// // function ggShieldbgSheild() {
// //     //plays animation
// // }

// // function ggSpellbgSword() {
// //     //plays animation
// // }

// // function ggSpellbgSpell() {
// //     //plays animation
// // }

// // function ggSpellbgSheild() {
// //     //plays animation
// // }