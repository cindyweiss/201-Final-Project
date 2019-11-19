'use strict';


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

var swordTarget = document.getElementById('swordTarget');
var spellTarget = document.getElementById('spellTarget');
var shieldTarget = document.getElementById('shieldTarget');

// var stx = st.getContext('2d');
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

// var swordImg = new Image();
// swordImg.src = "images/swordSprite.png";

// var shieldImg = new Image();
// shieldImg.src = "images/shieldSprite.png";

// var spellImg = new Image();
// spellImg.src = "images/spellSprite.png";
swordTarget.src = "images/swordSprite.png";
spellTarget.src = "images/spellSprite.png";
shieldTarget.src = "images/shieldSprite.png";



// //put this in the render at the end - to isaac
//gif instead

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

var goodGuySpriteSheet = {
    frameSet: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]],
    image: new Image()
};


goodGuySpriteSheet.image.src = "images/pallySheet.png";

var goodGuyIdle = {
    animation: new CharAnimation(goodGuySpriteSheet.frameSet),
    height: 32,
    width: 32,
    x: 85,
    y: 165
};


// var practiceAnimation = true;


var loop = function () {
    // i think this is where we will put our big condition statement



    goodGuyIdle.animation.change(goodGuySpriteSheet.frameSet[2], 40);
    // console.log(goodGuy.animation.counter)




    ctx.clearRect(0, 0, 480, 640)
    ctx.drawImage(backgroundImg, 0, 0);

    // ctx.drawImage(swordImg, 5, 210, 52, 97);
    // ctx.drawImage(shieldImg, 160, 235, 76, 73);
    // ctx.drawImage(spellImg, 70, 220, 72, 87);
    // spellImg.addEventListener('click', event => {
    //     console.log('it works!!');
    // } );
    ctx.drawImage(goodGuySpriteSheet.image, goodGuyIdle.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(goodGuyIdle.x), Math.floor(goodGuyIdle.y), SPRITE_SIZE, SPRITE_SIZE);
    goodGuyIdle.animation.update();

    window.requestAnimationFrame(loop);
};

// st.src = 'images/spellSprite.png';
// var spell = document.createElement('img');

// st.append(spell);




//the render function. we could probably put this in the constructor but it was working so i didnt touch it!
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




// creating all sprites









// cloud2.tickCount = 0;
// cloud2.ticksPerFrame = options.ticksPerFrame || 0;
// cloud2.moveClouds = function (velocity) {
//     tickCount += 1;
//     while (this.x <= 500) {
//         this.x += velocity;
//         if (this.x > 500) {
//             this.x = -50;
//         }
//     }
// }

// cloud2.moveClouds(1);



// var spriteSize = 32;

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