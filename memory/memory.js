function setup() {
    createCanvas(1250, 1250);
    background(66, 135, 245);
    let myCard = new Card();
}

class Card{
    constructor (){   //properties
        this.x = 129; 
        this.y = 129;
        this.width = 200;
        this.height = 200;
        this.show(); 
    }
    show (){        //methods
        fill('yellow'); 
        rect (this.x, this.y, this.width, this.height, 10);
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




