'use strict';

class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {

    this.load.image("swordSprite", "images/swordSprite.png");
    this.load.image("spellSprite", "images/spellSprite.png");
    this.load.image("shieldSprite", "images/shieldSprite.png");
    this.load.image("BG", "images/BG.png");
    // this.load.spritesheet("pallyNewIdle", "images/pallyNewIdle.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("banditIdle32", "images/banditIdle32.png", { frameWidth: 32, frameHeight: 32 });
    // this.load.spritesheet("ggSword", "images/ggSword.png", { frameWidth: 32, frameHeight: 32 });
    // this.load.spritesheet("ggSpell", "images/ggSpell.png", { frameWidth: 32, frameHeight: 45 });
    // this.load.spritesheet("ggShield", "images/ggShield.png", { frameWidth: 32, frameHeight: 45 });
    this.load.spritesheet("pallyTotal", "images/pallyTotal.png", { frameWidth: 32, frameHeight: 45 });
    this.load.spritesheet("banditTotal", "images/banditTotal.png", { frameWidth: 32, frameHeight: 45 });

  }
  // create() {


  //   let background = this.add.image(game.config.width / 2, game.config.height / 2, "BG");

  //   this.load.image('swordSprite', 'images/swordSprite.png');
  //   this.load.image('spellSprite', 'images/spellSprite.png');
  //   this.load.image('shieldSprite', 'images/shieldSprite.png');
  //   this.load.image('BG', 'images/BG.png');
  //   this.load.spritesheet('pallyNewIdle', 'images/pallyNewIdle.png', { frameWidth: 32, frameHeight: 32 });
  //   this.load.spritesheet('banditIdle32', 'images/banditIdle32.png', { frameWidth: 32, frameHeight: 32 });
  //   this.load.spritesheet('ggSword', 'images/ggSword.png', { frameWidth: 32, frameHeight: 32 });
  //   this.load.spritesheet('ggSpell', 'images/ggSpell.png', { frameWidth: 32, frameHeight: 45 });
    

  // }
  create() {
    let background = this.add.image(game.config.width / 2, game.config.height / 2, 'BG');



    paladin = this.add.sprite(222, 335, "pallyTotal");


    this.anims.create({
      key: 'pallyIdle',
      frames: [
        { key: 'pallyTotal', frame: 0 },
        { key: 'pallyTotal', frame: 1 },
      ],
      frameRate: 3.2,
      repeat: -1,
    });

    paladin.play('pallyIdle');
    this.anims.create({
      key: 'ggSpell',
      frames: [
        { key: 'pallyTotal', frame: 10 },
        { key: 'pallyTotal', frame: 11 },
        { key: 'pallyTotal', frame: 12 },
        { key: 'pallyTotal', frame: 13 },
        { key: 'pallyTotal', frame: 14 },
        { key: 'pallyTotal', frame: 15 },
        { key: 'pallyTotal', frame: 16 },
        { key: 'pallyTotal', frame: 17 },
      ],
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: 'ggShield',
      frames: [
        { key: 'pallyTotal', frame: 18 },
        { key: 'pallyTotal', frame: 19 },
        { key: 'pallyTotal', frame: 20 },
        { key: 'pallyTotal', frame: 21 },
        { key: 'pallyTotal', frame: 22 },
        { key: 'pallyTotal', frame: 23 },
        { key: 'pallyTotal', frame: 24 },
        { key: 'pallyTotal', frame: 25 },
      ],
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: 'ggSword',
      frames: [
        { key: 'pallyTotal', frame: 2 },
        { key: 'pallyTotal', frame: 3 },
        { key: 'pallyTotal', frame: 4 },
        { key: 'pallyTotal', frame: 5 },
        { key: 'pallyTotal', frame: 6 },
        { key: 'pallyTotal', frame: 7 },
        { key: 'pallyTotal', frame: 8 },
        { key: 'pallyTotal', frame: 9 },
      ],
      frameRate: 7,
      repeat: -1,
    });


    bandit = this.add.sprite(252, 339, 'banditTotal');

    this.anims.create({
      key: 'badIdle',
      frames: [
        { key: 'banditTotal', frame: 0 },
        { key: 'banditTotal', frame: 1 },
      ],
      frameRate: 3.2,
      repeat: -1
    });
    bandit.play('badIdle');

    this.anims.create({
      key: 'bgSword',
      frames: [
        { key: 'banditTotal', frame: 0 },
        { key: 'banditTotal', frame: 1 },
        { key: 'banditTotal', frame: 2 },
        { key: 'banditTotal', frame: 3 },
        { key: 'banditTotal', frame: 4 },
        { key: 'banditTotal', frame: 5 },
      ],
      frameRate: 5,
      repeat: -1,
    });


    this.swordSprite = this.add.image(150, 415, 'swordSprite');
    this.swordSprite.setInteractive();
    this.swordSprite.on('pointerdown', this.swordOnDown, this);
    this.swordSprite.on('pointerup', this.swordOnUp, this);
    this.swordSprite.setScale(.5);

    this.spellSprite = this.add.image(225, 415, 'spellSprite');
    this.spellSprite.setInteractive();
    this.spellSprite.on('pointerdown', this.spellOnDown, this);
    this.spellSprite.on('pointerup', this.spellOnUp, this);
    this.spellSprite.setScale(.5);

    this.shieldSprite = this.add.image(315, 425, 'shieldSprite');
    this.shieldSprite.setInteractive();
    this.shieldSprite.on('pointerdown', this.shieldOnDown, this);
    this.shieldSprite.on('pointerup', this.shieldOnUp, this);
    this.shieldSprite.setScale(.5);

    // this.paladin.play('pallyIdle');
    //end create function
  }

  //below are our new phaser event listeners, we had to put a copy of battlefunction into each button unfortunately. When i tried to invoke battle function from this area it was not defined, and vice versa for the animation command. so this was my solution, it works for now and still succesfully invokes the other functions.
  shieldOnUp() {
    this.shieldSprite.alpha = 1;
    currentUserChoice = 'shield';
    badGuyChoice = attackChoices[Math.floor(Math.random() * 3)];
    if (currentUserChoice === badGuyChoice) {
      // draw condition
      dialogueString.textContent = 'It was a draw!';
    } else if ((currentUserChoice === 'sword' && badGuyChoice === 'spell') ||
      (currentUserChoice === 'spell' && badGuyChoice === 'shield') ||
      (currentUserChoice === 'shield' && badGuyChoice === 'sword')) {
      // user win condition
      switch (currentUserChoice) {
        case 'sword':
          dialogueString.textContent = 'Your sword removes their limbs!';

          this.ggSlash.play('ggSword');
          break;
        case 'shield':
          dialogueString.textContent = 'Your shield deflects the sword blow!';
          paladin.play('ggShield');
          bandit.play('bgSword');

          break;
        case 'spell':
          dialogueString.textContent = 'Your spell crushes their aspirations!';
          break;
        default:
          break;
      }
      winCountingArray[0]++;
    } else {
      // enemy win condtion
      switch (badGuyChoice) {
        case 'sword':
          dialogueString.textContent = 'Enemy sword disembowels you!';
           bandit.play('bgSword');
          bandit.play('bgSword');
          break;
        case 'shield':
          dialogueString.textContent = 'Enemy shield laughs at your sword!';
          break;
        case 'spell':
          dialogueString.textContent = 'Enemy spell really ruins your day!';
          break;
        default:
          break;
      }
      winCountingArray[1]++;
    }
    scoreBoard();

    if (winCountingArray.includes(3)) {
      winDetected();
    }
  }
  shieldOnDown() {
    this.shieldSprite.alpha = .5;
  }
  spellOnUp() {
    this.spellSprite.alpha = 1;
    currentUserChoice = 'spell';
    badGuyChoice = attackChoices[Math.floor(Math.random() * 3)];
    if (currentUserChoice === badGuyChoice) {
      // draw condition
      dialogueString.textContent = 'It was a draw!';
    } else if ((currentUserChoice === 'sword' && badGuyChoice === 'spell') ||
      (currentUserChoice === 'spell' && badGuyChoice === 'shield') ||
      (currentUserChoice === 'shield' && badGuyChoice === 'sword')) {
      // user win condition
      switch (currentUserChoice) {
        case 'sword':
          dialogueString.textContent = 'Your sword removes their limbs!';
          this.ggSlash = this.add.sprite(190, 335, 'ggSword');
          this.ggSlash.play('ggSword');
          break;
        case 'shield':
          dialogueString.textContent = 'Your shield deflects the sword blow!';
          break;
        case 'spell':
          dialogueString.textContent = 'Your spell crushes their aspirations!';

          paladin.play('ggSpell');

          // this.char = this.add.sprite(190, 335, "pallyNewIdle");
          break;
        default:
          break;
      }
      winCountingArray[0]++;
    } else {
      // enemy win condtion
      switch (badGuyChoice) {
        case 'sword':
          dialogueString.textContent = 'Enemy sword disembowels you!';
           bandit.play('bgSword');
          break;
        case 'shield':
          dialogueString.textContent = 'Enemy shield laughs at your sword!';
          break;
        case 'spell':
          dialogueString.textContent = 'Enemy spell really ruins your day!';
          break;
        default:
          break;
      }
      winCountingArray[1]++;
    }
    scoreBoard();

    if (winCountingArray.includes(3)) {
      winDetected();
    }
  }
  spellOnDown() {
    this.spellSprite.alpha = .5;
  }
  swordOnUp() {
    this.swordSprite.alpha = 1;
    currentUserChoice = 'sword';
    badGuyChoice = attackChoices[Math.floor(Math.random() * 3)];
    if (currentUserChoice === badGuyChoice) {
      // draw condition
      dialogueString.textContent = 'It was a draw!';
    } else if ((currentUserChoice === 'sword' && badGuyChoice === 'spell') ||
      (currentUserChoice === 'spell' && badGuyChoice === 'shield') ||
      (currentUserChoice === 'shield' && badGuyChoice === 'sword')) {
      // user win condition
      switch (currentUserChoice) {
        case 'sword':
          dialogueString.textContent = 'Your sword removes their limbs!';
          paladin.play('ggSword');
          break;
        case 'shield':
          dialogueString.textContent = 'Your shield deflects the sword blow!';
          break;
        case 'spell':
          dialogueString.textContent = 'Your spell crushes their aspirations!';
          break;
        default:
          break;
      }
      winCountingArray[0]++;
    } else {
      // enemy win condtion
      switch (badGuyChoice) {
        case 'sword':
          dialogueString.textContent = 'Enemy sword disembowels you!';
           bandit.play('bgSword');
          break;
        case 'shield':
          dialogueString.textContent = 'Enemy shield laughs at your sword!';
          break;
        case 'spell':
          dialogueString.textContent = 'Enemy spell really ruins your day!';
          break;
        default:
          break;

      }
      winCountingArray[1]++;
    }
    scoreBoard();

    if (winCountingArray.includes(3)) {
      winDetected();
    }
  }
  swordOnDown() {
    this.swordSprite.alpha = .5;
  }
  // removeIdle(){
  //   this.paladin.destroy();
  // }

  update() {
    //  if(){



  }
}

var paladin;

var bandit;

var attackChoices = ['sword', 'spell', 'shield'];

var currentUserChoice = '';

var SCORE_DATA = 'SCORE_DATA';

var scoreData = '';

var badGuyChoice = '';

var winCountingArray = [0, 0]; // [0] is currentUser , [1] is badGuy

var scoreObj = [];

var scoreBoardReference = document.getElementById('scoreBoard');

var currentUser = {
  winLossHistory: [0, 0],
  userHistory: 0
};

var scoreString = document.createElement('p');
var dialogueString = document.createElement('p');
var choiceString = document.createElement('p');

// Reference for hearing the Clear Local Data <a href> button

var clearDataReference = document.getElementById('clearData');
clearDataReference.addEventListener('click', clearDataFunction);

//  Local Storage set into User array


if (localStorage.getItem(SCORE_DATA) === null) {
  var localStorageArray = [];
} else {
  var jsonData = localStorage.getItem(SCORE_DATA);
  localStorageArray = JSON.parse(jsonData);
  console.log(localStorageArray);
}


//  Constructor for User Session

var User = function (name) {
  this.name = name;
  this.winLossHistory = [0, 0];
  this.userHistory = 0;

  this.saveToLocal = function () {
    localStorageArray.push(this);
    scoreData = JSON.stringify(localStorageArray);
    localStorage.setItem(SCORE_DATA, scoreData);
  };
};

//  To Remove Local Data, there is a clicker 'Clear Local Data' on index

function clearDataFunction() {
  localStorage.removeItem('SCORE_DATA');
}

//  Current Scoreboard Render

function scoreBoard() {
  scoreString.textContent = `User: ${winCountingArray[0]}, Enemy: ${winCountingArray[1]}`;
  if (!winCountingArray.includes(3)) {
    choiceString.textContent = `${currentUserChoice} vs ${badGuyChoice}`;
  } else {
    choiceString.textContent = '';
  }
  scoreBoardReference.append(scoreString);
  scoreBoardReference.append(dialogueString);
  scoreBoardReference.append(choiceString);
}

//  Render Win Screen and Provide User Options

function winDetected() {
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
    var newName = prompt('Input Name: ');
    scoreObj = new User(newName); //data constructed to obj
    scoreObj.userHistory = currentUser.userHistory;
    scoreObj.winLossHistory = currentUser.winLossHistory;
    scoreObj.saveToLocal();
  }
}
