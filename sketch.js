function setup() {
  // Setting the background as a maze for the user to navigate
  bg = loadImage('maze-clipart-line-art-2.png');
  createCanvas(900, 913);
}

// Allowing the user to draw as they navigate to keep track of their movement
function draw() {
// Drawing a black line to make the mark as visible as possible
  stroke(0);
// Drawing through clicking and holding so the user can decide whether or not they want to make marks
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
