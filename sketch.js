function setup() {
    createCanvas(600, 590);
    background('black');
  }
  
  function draw() {
    stroke(0,255,0);
    fill(50,205,50);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }