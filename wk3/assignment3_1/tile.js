function setup(){
    createCanvas(200, 200);
}
function createTile(){
    translate(0, 0);
    fill('black');
    rect(0, 0, 200, 200);
    stroke('yellow');
    strokeWeight(20);
    line(200, 0, 0, 200);
    line(100, 0, 0, 100);
    line(300, 0, 0, 300);
    strokeWeight(10);
    noStroke();
    fill('red');
    circle( 50, 100, 50);
    circle(150, 100, 50);
    noFill();
    stroke('pink');
    strokeWeight(10);
    circle(100, 60, 50);
    circle(100, 145, 50);
}
function draw() {
    createTile();
}