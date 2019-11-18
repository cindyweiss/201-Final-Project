'use strict';


//Isaacs animation code - You guys can work above this

/*to do list
- make function that accurately iterates over the sprite sheet
- then make functions for each action.
    - today we'll just make a run       animation.



*/

var SPRITE_SIZE = 32;

var canvas = document.getElementById('gameScreen');
var ctx = canvas.getContext('2d');




//preloading all images
var cloudImage = new Image();
cloudImage.src = "images/cloud1.png"

var cloudImage2 = new Image();
cloudImage2.src = "images/cloud2.png"

var cloudImage3 = new Image();
cloudImage3.src = "images/cloud3.png"

var backgroundImg = new Image();
backgroundImg.src = "images/BG.png"

var swordImg = new Image();
swordImg.src = "images/swordSprite.png"

var shieldImg = new Image();
shieldImg.src = "images/shieldSprite.png"

var spellImg = new Image();
spellImg.src = "images/spellSprite.png"

// //put this in the render at the end - to isaac
//gif instead

var CharAnimation = function (frameSet) {
        this.count = 0,
        this.delay = 20,
        this.frame = 0,
        this.frameSet = frameSet,
        this.frameIndex = 0,

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
                //frame index is stuck at 0
                if (this.frameIndex === 1) {
                    this.frameIndex = 0;
                } else { this.frameIndex += 1; }
            }
            this.frame = this.frameSet[this.frameIndex];

        }


};

var goodGuySpriteSheet = {
    frameSet:[[0,1],[2,3],[4,5],[6, 7],[8,9]],
    image: new Image()
};

goodGuySpriteSheet.image.src = "images/pallySheet.png";

var goodGuy = {
    animation: new CharAnimation(goodGuySpriteSheet.frameSet),
    height:32,
    width: 32,
    x:85, 
    y:165

};

var loop = function() {
    // i think this is where we will put our big condition statement
    goodGuy.animation.change(goodGuySpriteSheet.frameSet[2], 20);

    ctx.drawImage(backgroundImg, 0, 0);
    goodGuy.animation.update();
    ctx.drawImage(goodGuySpriteSheet.image, goodGuy.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(goodGuy.x), Math.floor(goodGuy.y), SPRITE_SIZE, SPRITE_SIZE);
    
    window.requestAnimationFrame(loop);

};





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

var cloud1 = new Asset(cloudImage, 5, 5, 1);
var cloud2 = new Asset(cloudImage2, 140, 7, 1);
var cloud3 = new Asset(cloudImage3, 50, -20, 1);
var sword = new Asset(swordImg, 21, 432, 1);
var shield = new Asset(shieldImg, 321, 462, 1);
var spell = new Asset(spellImg, 151, 432, 1);







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


goodGuySpriteSheet.image.addEventListener("load", function(event){
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