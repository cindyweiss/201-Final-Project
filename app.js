'use strict';

var attackChoices = ['sword', 'spell', 'shield'];

var currentUserChoice = '';

var winCountingArray = [0, 0]; // [0] is currentUser , [1] is badGuy

var turnCounter = 0;

var userHistory = []; // LS later

// Local storage into user vvv

var User = function (name) {
  this.name = name;
  this.winLossHistory = [0, 0];
};




// Evaluate Choices
// sword beats spell, spell beats shield, shield beats sword

var swordTarget = document.getElementById('swordTarget');
var spellTarget = document.getElementById('spellTarget');
var shieldTarget = document.getElementById('shieldTarget');




swordTarget.addEventListener('click', event => {
  currentUserChoice = 'sword';
  battleFunction();

});
spellTarget.addEventListener('click', event => {
  currentUserChoice = 'spell';
  battleFunction();

});
shieldTarget.addEventListener('click', event => {
  currentUserChoice = 'shield';
  battleFunction();

});



function battleFunction() {
  if (!winCountingArray.includes(5)) {
    var badGuyChoice = attackChoices[Math.floor(Math.random() * 3)];
    // currentUserChoice = prompt('sword, spell, or shield: ');
    if (currentUserChoice === badGuyChoice) {
      alert('draw');
      turnCounter++;
      console.log(badGuyChoice);
    } else if ((currentUserChoice === 'sword' && badGuyChoice === 'spell') ||
      (currentUserChoice === 'spell' && badGuyChoice === 'shield') ||
      (currentUserChoice === 'shield' && badGuyChoice === 'sword')) {
      winCountingArray[0]++;
      turnCounter++;
      console.log(badGuyChoice);
      alert(`good point ${winCountingArray[0]}\n\ngood ${currentUserChoice}| bad ${badGuyChoice}`);
    } else {
      winCountingArray[1]++;
      turnCounter++;
      console.log(badGuyChoice);
      alert(`bad point ${winCountingArray[1]}\n\ngood ${currentUserChoice}| bad ${badGuyChoice}`);
    }
    // currentUserChoice = '';
  } else {
    alert(`reached 5, compare time ${winCountingArray}`);
    if (winCountingArray[0] > winCountingArray[1]) {
      currentUser.winLossHistory[0]++;
      console.log(`user Win Count: ${currentUser.winLossHistory[0]}`);

    } else if (winCountingArray[0] < winCountingArray[1]) {
      currentUser.winLossHistory[1]++;
      console.log(`user Loss Count: ${currentUser.winLossHistory[1]}`);
    }
    var playAgain = confirm('Would you like to play again?');
    if (playAgain === true) {
      winCountingArray = [0, 0];

    } else {
      var newUser = prompt('INPUT NAME: ');
      var currentUser = new User(newUser); 
      var score = document.getElementById('score');
      //// CINDY WORK HERE! probabllyy

    }
  }
}


//Isaacs animation code - You guys can work above this

/*to do list
- be able to change the animation as the result of an if statement and then have it switch back to idle after completion of animation.




Thoughts about animation
- idle animation 2 frames back and forth.
- battle scenes are lots of frames iterated over once!
- while battle scenes run, idle must disappear.
- when battle ends units return to idle.
- walk back to idle spots in battle scene.
*/

var SPRITE_SIZE = 32;


var canvas = document.getElementById('gameScreen');
var ctx = canvas.getContext('2d');





//preloading all images
// var cloudImage = new Image();
// cloudImage.src = "images/cloud1.png";

// var cloudImage2 = new Image();
// cloudImage2.src = "images/cloud2.png";

// var cloudImage3 = new Image();
// cloudImage3.src = "images/cloud3.png";

var backgroundImg = new Image();
backgroundImg.src = "images/BG.png";

swordTarget.src = "images/swordSprite.png";
spellTarget.src = "images/spellSprite.png";
shieldTarget.src = "images/shieldSprite.png";



var CharAnimation = function (frameSet) {
  this.count = 0,
    this.delay = 20,
    this.frame = 0,
    this.frameSet = frameSet,
    this.frameIndex = 0,

    //for an animation use the change function to change to it and change the frameset to an array of animation. the animation may also need to be its own object.
    this.change = function (frameSet, delay) {
      if (this.frameSet != frameSet) {

        this.count = 0;
        this.delay = delay;
        this.frameIndex = 0;
        this.frameSet = frameSet;
        this.frame = frameSet[this.frameIndex];
      }
    },

    this.update = function () {
      this.count++;

      if (this.count >= this.delay) {
        this.count = 0;



        if (this.frameIndex === 1) {
          this.frameIndex = 0;
        } else {
          this.frameIndex += 1;
        }
      }
      this.frame = this.frameSet[this.frameIndex];
    }
};

var banditSpriteSheet = {
  frameSet: [[0, 1]],
  image: new Image()
};


banditSpriteSheet.image.src = "images/banditIdle32.png";

var goodGuySpriteSheet = {
  frameSet: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]],
  image: new Image()
};


goodGuySpriteSheet.image.src = "images/pallySheet.png";

var banditIdle = {
  animation: new CharAnimation(banditSpriteSheet.frameSet),
  height: 32,
  width: 32,
  x: 150,
  y: 165
};

var goodGuyIdle = {
  animation: new CharAnimation(goodGuySpriteSheet.frameSet),
  height: 32,
  width: 32,
  x: 85,
  y: 165
};




var loop = function () {
  // i think this is where we will put our big condition statement

  goodGuyIdle.animation.change(goodGuySpriteSheet.frameSet[2], 40);
  banditIdle.animation.change(banditSpriteSheet.frameSet[0], 20);
  ctx.clearRect(0, 0, 480, 640)
  ctx.drawImage(backgroundImg, 0, 0);

  ctx.drawImage(goodGuySpriteSheet.image, goodGuyIdle.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(goodGuyIdle.x), Math.floor(goodGuyIdle.y), SPRITE_SIZE, SPRITE_SIZE);

  ctx.drawImage(banditSpriteSheet.image, banditIdle.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(banditIdle.x), Math.floor(banditIdle.y), SPRITE_SIZE, SPRITE_SIZE);

  banditIdle.animation.update();
  goodGuyIdle.animation.update();
  window.requestAnimationFrame(loop);
};






function renderNewSprite(image, x, y) {
  image.onload = function () {

    ctx.drawImage(image, x, y);
  };

}

//the constructor for new sprites on the canvas
var Asset = function (image, x, y, velocity) {
  this.image = image;
  this.x = x;
  this.y = y;
  this.velocity = velocity;

  renderNewSprite(image, x, y);

};




// var spriteSheet = {

//     frameSets: [[/* idle */],
//     [/* gg Sword bg Sword */],
//     [/* gg Sword bg Spell */],
//     [/* gg Sword bg Shield */],
//     [/* gg Spell bg Sword */],
//     [/* gg Spell bg Spell */],
//     [/* gg Spell bg S+hield */],
//     [/* gg Shield bg Sword */],
//     [/* gg Shield bg Spell */],
//     [/* gg Shield bg Shield */],],


// };


goodGuySpriteSheet.image.addEventListener("load", function (event) {

  window.requestAnimationFrame(loop);
});
// //character animation functions
// function idle() {
//     //plays idle animation


// }

// function ggSwordbgSword() {
//     //plays animation
// }

// function ggSwordbgSpell() {
//     //plays animation
// }

// function ggSwordbgSheild() {
//     //plays animation
// }

// function ggShieldbgSword() {
//     //plays animation
// }

// function ggShieldbgSpell() {
//     //plays animation
// }

// function ggShieldbgSheild() {
//     //plays animation
// }

// function ggSpellbgSword() {
//     //plays animation
// }

// function ggSpellbgSpell() {
//     //plays animation
// }

// function ggSpellbgSheild() {
//     //plays animation
// }
