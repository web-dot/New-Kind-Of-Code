let cells = []
let w = 5;
let y = 0;
let ruleValue =  73;
let ruleSet;


function setup() {
  createCanvas(800, 1800);
  
  ruleSet = ruleValue.toString(2);
  while(ruleSet.length < 8){
    ruleSet = '0' + ruleSet;
  }
  console.log(ruleSet);
  
  let total = width / w;
  for(let i = 0; i < total; i++){
    cells[i] = 0;
  }
  cells[floor(total / 2)] = 1;
  background(220);
}

function draw() {
  for(let i = 0; i < cells.length; i++){
    let x = i * w;
    noStroke();
    fill(255 - cells[i] * 255);
    square(x, y, w)
  }
  
  y += w;
  
  let nextCells = [];
  
//   nextCells[0] = cells[0];
//   nextCells[cells.length - 1] = cells[cells.length - 1];

  let len = cells.length;
  for(let i = 0; i < cells.length; i++){
    let left = cells[(i - 1 + len) % len];
    let right = cells[(i + 1 + len) % len];
    let state = cells[i];
    let newState = calculateState(left, state, right);
    nextCells[i] = newState;
  }
  
  cells = nextCells;
}

function calculateState(a, b, c){
  let neighborhood = '' + a + b + c;
  let value = 7 - parseInt(neighborhood, 2);
  return  parseInt(ruleSet[value]);
}



