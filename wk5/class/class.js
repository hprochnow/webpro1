let bubble;

function setup() {
    createCanvas(600, 400);  
    bubble = new Bubble();
}

 function draw() {
   background(0);
for (let k = 0; k < 10; k++){
    bubble.move();
    bubble.show();   
  }

}


class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }

    move() {
        this.x = this.x + random( -5, 5);
        this.y = this.y + random( -5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        ellipse(this.x, this.y, 24, 24);

    }
}
