let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background(40, 36, 149);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    if (mouseIsPressed) {
        stroke(159, 230, 228);
    } else {
        stroke(220, 228, 159);
    }
    strokeWeight(1);
    triangle(300 + alt, 100, 320 - alt, 100, 310, 80);
    triangle(150, 50, 160, 50, 155, 40);
    triangle(100, 25, 110, 25, 120, 40);
    quad(189 / alt, 18, 216, 18, 216, 360, 144, 360);

}
function draw() {
    translate(300, 300);
    rotate(rotateBy); //come back to this
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed(){
    noLoop();
}