'use strict';


//Isaacs animation code - You guys can work above this

/*to do list
- make function that accurately iterates over the sprite sheet
- then make functions for each action.
    - today we'll just make a run       animation.



*/
var gameScreen = document.getElementById('gameScreen');
gameScreen.width = 480;
gameScreen.height = 640;

var cloud1Image = new Image();
cloud1Image.src = 'images/cloud1.png';

var name = 'isaac';

var Sprite = function(context, width, height, image) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.image = image;

}

var cloud1 = new Sprite(gameScreen.getContext('2d'), 83, 57, cloud1Image);

var spriteSize = 32;

var spriteSheet = {

    frameSets: [[/* idle */],
    [/* gg Sword bg Sword */],
    [/* gg Sword bg Spell */],
    [/* gg Sword bg Shield */],
    [/* gg Spell bg Sword */],
    [/* gg Spell bg Spell */],
    [/* gg Spell bg Shield */],
    [/* gg Shield bg Sword */],
    [/* gg Shield bg Spell */],
    [/* gg Shield bg Shield */],],


};







//character animation functions
function idle() {
    //plays idle animation


}

function ggSwordbgSword() {
    //plays animation
}

function ggSwordbgSpell() {
    //plays animation
}

function ggSwordbgSheild() {
    //plays animation
}

function ggShieldbgSword() {
    //plays animation
}

function ggShieldbgSpell() {
    //plays animation
}

function ggShieldbgSheild() {
    //plays animation
}

function ggSpellbgSword() {
    //plays animation
}

function ggSpellbgSpell() {
    //plays animation
}

function ggSpellbgSheild() {
    //plays animation
}