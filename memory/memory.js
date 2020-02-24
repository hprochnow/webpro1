
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState ={
    totalPairs: 4,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardfaceArray = [];
let cardBack;
function preload(){
    cardBack = loadImage('images/cardback.jpg');
    cardfaceArray = [
        loadImage('images/cowgirl.jpg'),
        loadImage('images/dunes.png'),
        loadImage('images/flamingo.png'),
        loadImage('images/holiday.png'),
        loadImage('images/moulin.png'),
        loadImage('images/nugget.png'),
        loadImage('images/Sands.png'),
        loadImage('images/slipper.png'),
        loadImage('images/yuca.png')
    ]
}
function setup() {
    createCanvas(1000, 1000);
    background(66, 135, 245);
    let selectedFaces = [];
    for (let z = 0; z < 4; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //to remove the selected card from the array
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 3 ; i++) { 
            const faceImage = selectedFaces.pop();
        cards.push(new Card(startingX, startingY, faceImage)); 
        startingX += 250;
    }
    startingY += 250;
    startingX = 100;
}
}
function draw () {
    background(66, 135, 245);
    if (gameState.numMatched === gameState.totalPairs) {
        fill ('yellow');
        textSize(66);
        text('You Win!', 400, 4250);
        noLoop();
    }
    for (let j = 0; j < cards.length; j++) {
        if(!cards[j].isMatch) {
            cards[j].face = DOWN;
        }
        cards[j].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('#cca200')
    textSize(36);
    text('Attempts: ' + gameState.attempts, 100, 900);
    text('Matches: ' + gameState.numMatched, 100, 950);
    textSize(36);
    text('Click each card to find a match!' , 50, 50);

}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let j = 0; j <= cards.length; j++) {
        // first check of flipped cards length and then trigger the flip
        if(gameState.flippedCards.length < 2 && cards[j].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[j]);
            gameState.flippedCards.push(cards[j]);
        }
    }
    if (gameState.flippedCards.length == 2) {
        gameState.attemps++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //mark flipped cards
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty flipped cards array
            gameState.flippedCards.length = 0;
            //increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);

            } , 1000)

        }
    }

}

class Card{
    constructor (x, y, cardFaceImg) {   //properties
        this.x = x; 
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show(); 
    }
    show (){        //methods
        if(this.face === UP || this.isMatch) {
            fill ('red');
            rect (this.x, this.y, this.width, this.height);
            image (this.cardFaceImg, this.x, this.y);   
        } else {
            fill('yellow'); 
            rect (this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y, this.width, this.height);
        }

    }
    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }
    flip (){
        if (this.face === DOWN){
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }

}
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
      // pick random index
      const idx = Math.floor(Math.random() * counter);
      // decrease counter by 1 (decrement)
      counter--;
      // swap the last element with it
      const temp = array[counter];
      array[counter] = array[idx];
      array[idx] = temp;
    }
    return array;
  }







//const rectWidth= 200;
//const rectHeight = 200;
//let startingX = 129;
//let startingY = 129;
//let myGrid = [];

//function setup() {
//    createCanvas(1250, 1250);
//    background(66, 135, 245);
//    for (let k = 0; k < 3; k++) {
  //      for (let i = 0; i < 3 ; i++){
    //        fill ('yellow');
      //      rect(startingX, startingY, 250, 250);
        //    myGrid.push({ x: startingX, y: startingY, id: i + k });
          //  startingX += 400;
        //}
        //startingY += 400;
        //startingX = 129;
    //}
//}




