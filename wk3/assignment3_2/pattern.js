function setup(){
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, circleOutlineColor, dotColor){
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(20);
    line(200, 0, 0, 200);
    strokeWeight(10);
    line(100, 0, 0, 100);
    line(300, 0, 0, 300);
    noStroke();
    fill(dotColor);
    circle( 50, 100, 50);
    circle(150, 100, 50);
    noFill();
    stroke(circleOutlineColor);
    strokeWeight(10);
    circle(100, 45, 50);
    circle(100, 145, 50);
}
function draw() {
    createTile(0, 0, 'black', 'white', 'yellow', 'pink');
    createTile(0, 200, 'red', 'yellow', 'black','yellow');
    createTile(0, 200, 'black', 'white', 'red', 'yellow');
    createTile(200,-400, 'yellow', 'white','magenta', 'pink');
    createTile(0, 200, 'magenta', 'yellow','black', 'yellow');
    createTile(0,200, 'yellow', 'white','red', 'pink');
    createTile(200,-400, 'black', 'white','magenta', 'pink');
    createTile(0, 200, 'red', 'yellow','', 'pink');
    createTile(0,200, 'black', 'white','red', 'pink'); 

}