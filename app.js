'use strict';

var attackChoices = ['sword', 'spell', 'shield'];

var currentUserChoice = '';

var winCountingArray = [0, 0]; // [0] is currentUser , [1] is badGuy

var scoreObj;

var turnCounter = 0;

var currentUser = {
  winLossHistory: [0, 0],
  userHistory: 0

};

var pElement = document.createElement('p');

var dialogueString = document.createElement('p');

//    Local Storage set into User

var User = function (name) {
  this.name = name;
  this.winLossHistory = [0, 0];
  this.userHistory = 0;

  this.saveToLocal = function () {
    var scoreData = JSON.stringify(this);
    localStorage.setItem('SCORE_DATA', scoreData);
  };
};


// sword beats spell, spell beats shield, shield beats sword

var swordTarget = document.getElementById('swordTarget');
var spellTarget = document.getElementById('spellTarget');
var shieldTarget = document.getElementById('shieldTarget');


// Action Listeners with What Happens when Clicked

swordTarget.addEventListener('click', event => {
  currentUserChoice = 'sword';
  console.log('sword');
  battleFunction();

});

spellTarget.addEventListener('click', event => {
  currentUserChoice = 'spell';
  console.log('spell');
  battleFunction();
});

shieldTarget.addEventListener('click', event => {
  currentUserChoice = 'shield';
  console.log('shield');
  battleFunction();
});

//    Evaluate the Battle

function battleFunction() {


  //I know this is the current version, but it seemed like it wasnt completely done yet.

  //   var badGuyChoice = attackChoices[Math.floor(Math.random() * 3)];
  //   p2Element.textContent = `${currentUserChoice} VERSUS ${badGuyChoice}`;
  //   if (currentUserChoice === badGuyChoice) {
  //     //draw condition
  //     p2Element.textContent = 'draw';
  //   } else if ((currentUserChoice === 'sword' && badGuyChoice === 'spell') ||
  //     (currentUserChoice === 'spell' && badGuyChoice === 'shield') ||
  //     (currentUserChoice === 'shield' && badGuyChoice === 'sword')) {

  //     //user win condition
  //     winCountingArray[0]++;
  //   } else {

  //     //enemy win condtion
  //     winCountingArray[1]++;
  //   }


  var badGuyChoice = attackChoices[Math.floor(Math.random() * 3)];
  if (currentUserChoice === badGuyChoice) {
    alert('draw');

  } else if ((currentUserChoice === 'sword' && badGuyChoice === 'spell') ||
    (currentUserChoice === 'spell' && badGuyChoice === 'shield') ||
    (currentUserChoice === 'shield' && badGuyChoice === 'sword')) {
    winCountingArray[0]++;
    alert(`good point ${winCountingArray[0]}\n\ngood ${currentUserChoice}| bad ${badGuyChoice}`);

  } else {
    winCountingArray[1]++;
    alert(`bad point ${winCountingArray[1]}\n\ngood ${currentUserChoice}| bad ${badGuyChoice}`);

  }
  if (winCountingArray.includes(3)) {
    alert(`reached 3, compare time ${winCountingArray}`);
    currentUser.userHistory++;


    if (winCountingArray[0] > winCountingArray[1]) {
      currentUser.winLossHistory[0]++;
      dialogueString.textContent = 'GLORY TO THE USER';

    } else if (winCountingArray[0] < winCountingArray[1]) {
      currentUser.winLossHistory[1]++;
      dialogueString.textContent = 'DIE, USER SCUM!';
    }
    scoreBoard();
    var playAgain = confirm('Would you like to play again?');
    if (playAgain === true) {
      winCountingArray = [0, 0];
    } else {

      winCountingArray = [0, 0];
      var newUser = prompt('Input Name: ');
      scoreObj = new User(newUser); //data constructed to obj
      scoreObj.userHistory = currentUser.userHistory;
      scoreObj.winLossHistory = currentUser.winLossHistory;
      scoreObj.saveToLocal();
    }
  } else {
    eventListeners();
    scoreBoard();
  }

  scoreBoard();
}

// Current Scoreboard NOT HIGH SCORE

function scoreBoard() {
  var scoreBoardReference = document.getElementById('scoreBoard');
  console.log(scoreBoardReference);
  pElement.textContent = `User: ${winCountingArray[0]}, Enemy: ${winCountingArray[1]}`;
  scoreBoardReference.append(pElement);
  scoreBoardReference.append(dialogueString);
}

//isaac- wasnt sure what to delete and what to keep for these

// ====================================================================================


// Current Scoreboard NOT HIGH SCORE

//function scoreBoard() {

//var scoreCardReference = document.getElementById('scoreCard');
//console.log(scoreCardReference);
//var pElement = document.createElement('p');
//pElement.textContent = 'This is a test';
//scoreCardReference.append(pElement);

//}

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
backgroundImg.src = 'images/BG.png';

swordTarget.src = 'images/swordSprite.png';
spellTarget.src = 'images/spellSprite.png';
shieldTarget.src = 'images/shieldSprite.png';



var backgroundImg = new Image();
backgroundImg.src = 'images/BG.png';

var CharAnimation = function (frameSet) {
  this.count = 0,
  this.delay = 20,
  this.frame = 0,
  this.frameSet = frameSet,
  this.frameIndex = 0,

  //for an animation use the change function to change to it and change the frameset to an array of animation. the animation may also need to be its own object.
  this.change = function (frameSet, delay) {
    if (this.frameSet !== frameSet) {

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
  };

};

var banditSpriteSheet = {
  frameSet: [[0, 1]],
  image: new Image()

};

banditSpriteSheet.image.src = 'images/banditIdle32.png';

var goodGuySpriteSheet = {

  frameSet: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]],
  image: new Image()

};



goodGuySpriteSheet.image.src = 'images/pallySheet.png';

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
  goodGuyIdle.animation.change(goodGuySpriteSheet.frameSet[2], 40);
  banditIdle.animation.change(banditSpriteSheet.frameSet[0], 20);
  ctx.clearRect(0, 0, 480, 640)
  ctx.drawImage(backgroundImg, 0, 0);
  ctx.drawImage(goodGuySpriteSheet.image, goodGuyIdle.animation.frame * SPRITE_SIZE,
    0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(goodGuyIdle.x), Math.floor(goodGuyIdle.y), SPRITE_SIZE, SPRITE_SIZE);

  ctx.drawImage(banditSpriteSheet.image, banditIdle.animation.frame * SPRITE_SIZE, 0,
    SPRITE_SIZE, SPRITE_SIZE, Math.floor(banditIdle.x), Math.floor(banditIdle.y), SPRITE_SIZE, SPRITE_SIZE);

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

// var Asset = function (image, x, y, velocity) {
//   this.image = image;
//   this.x = x;
//   this.y = y;
//   this.velocity = velocity;


//   renderNewSprite(image, x, y);


goodGuySpriteSheet.image.addEventListener('load', function (event) {

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
