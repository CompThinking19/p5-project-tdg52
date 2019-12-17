// Preloading image that'll be set as the background
let img;
function preload() {
  img = loadImage('maze-clipart-line-art-2.png');
}

function setup() {
 // Setting the background as a maze for the user to navigate
 bg = image(img, 0, 0);
 createCanvas(900, 913);
}

// Allowing the user to draw as they navigate to keep track of their movement
function draw() {
 // put drawing code here
}
// Drawing a black line to make the mark as visible as possible
 stroke(0);
// Drawing through clicking and holding so the user can decide whether or not they want to make marks
 if (mouseIsPressed === true) {
   line(mouseX, mouseY, pmouseX, pmouseY);
 }
}
