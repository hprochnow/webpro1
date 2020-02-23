let myCard;
const DOWN = 'down';
const UP = 'up';
function setup() {
    createCanvas(1250, 1250);
    background(66, 135, 245);
    myCard = new Card();
}
function mousePressed() {
    console.log (myCard.didHit(mouseX, mouseY));
}

class Card{
    constructor (){   //properties
        this.x = 129; 
        this.y = 129;
        this.width = 200;
        this.height = 200;
        this.face = DOWN;
        this.show(); 
    }
    show (){        //methods
        if(this.face === DOWN) {
            fill('yellow'); 
            rect (this.x, this.y, this.width, this.height, 10);    
        } else {
            fill ('red');
            rect (this.x, this.y, this.width, this.height, 10);
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




