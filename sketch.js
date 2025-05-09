let subjects = ["A number", "A digit", "A figure", "A speech", "A prime", "Infinity"];
let verbs = ["is", "whispers", "hides", "echoes", "becomes", "holds"];
let metaphors = [
  "a secret of stars",
  "the spiral of π",
  "the rhythm of flowers",
  "a lonely code",
  "the breath of space",
  "the hum of silence"
];

let poem = [];

function setup() {
  createCanvas(512, 342);
  textFont('monospace');
  textSize(12);
  generatePoem();
}

function draw() {
  drawMacWindow();
  drawPoem();
}

function mousePressed() {
  generatePoem();
}

function drawMacWindow() {
  background(230);

  // Border
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(4, 4, width - 8, height - 8);

  // Title bar
  fill(180);
  noStroke();
  rect(4, 4, width - 8, 20);

  // Fake menu
  fill(0);
  textAlign(LEFT, CENTER);
  text("File  Edit  Poem", 12, 14);
}

function drawPoem() {
  fill(0);
  textAlign(LEFT, TOP);
  for (let i = 0; i < poem.length; i++) {
    text(poem[i], 20, 40 + i * 30);
  }
}

function generatePoem() {
  poem = [];
  for (let i = 0; i < 4; i++) {
    let subject = random(subjects);
    let verb = random(verbs);
    let metaphor = random(metaphors);
    poem.push(subject + " " + verb + " " + metaphor + ".");
  }
}
