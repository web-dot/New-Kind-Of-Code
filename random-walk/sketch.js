let x;
let y;
let step = 0;
let hueDirection = 1;

function setup() {
  createCanvas(665, 600);
  colorMode(HSB, 255);
  x = 200;
  y = 200;
  background(51);
}

function draw() {
  let hueValue = map(step, 0, width + height, 0, 255);
  stroke(hueValue, 255, 255);
  strokeWeight(1);
  point(x, y);
  
  var r = floor(random(4));
  
  switch(r){
    case 0: 
      x = x + 5;
      break;
    case 1:
      x = x - 5;
      break;
    case 2:
      y = y + 5;
      break;
    case 3:
      y = y - 5;
      break;
  }
  
  if (x > width) x = width - 5;
  if (x < 0) x = 5;
  if (y > height) y = height - 5;
  if (y < 0) y = 5;
  
  step += hueDirection;
  
  if (step >= width + height || step <= 0) {
    hueDirection *= -1; // Reverse direction
  }
  
   
}