let subjects = [
  "Zero", "An odd digit", "The echo of seven", "A remainder",
  "A paused equation", "A forgotten prime", "A quiet symbol", "Noise in a sequence"
];

let verbs = [
  "dreams of", "fractures into", "waits for", "hums beneath",
  "disguises itself as", "folds into", "escapes through", "asks"
];

let metaphors = [
  "a radio left on at night",
  "a pause in breathing",
  "the absence of sound",
  "a ripple across glass",
  "static between thoughts",
  "a syllable never spoken",
  "the curl of a fern",
  "the ghost in a waveform"
];

let poem = [];
let quietMode = false;
let menuHeight = 20;

function setup() {
  createCanvas(512, 342);
  textFont('monospace');
  textSize(12);
  generatePoem();
}

function draw() {
  drawMacWindow();
  drawPoem();

  if (quietMode) {
    fill(255, 220);
    rect(0, 0, width, height);
    fill(0);
    textAlign(CENTER, CENTER);
    text("quiet mode", width / 2, height / 2);
  }
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
  rect(4, 4, width - 8, menuHeight);

  // Menu text
  fill(0);
  textAlign(LEFT, CENTER);
  text("File", 12, 14);
  text("Edit", 52, 14);
  text("Poem", 100, 14);
}

function drawPoem() {
  fill(0);
  textAlign(LEFT, TOP);
  for (let i = 0; i < poem.length; i++) {
    text(poem[i], 20, 40 + i * 30);
  }
}

function mousePressed() {
  if (mouseY > 4 && mouseY < 4 + menuHeight) {
    if (mouseX >= 12 && mouseX < 45) {
      fileClear();
      return;
    }
    if (mouseX >= 52 && mouseX < 90) {
      generatePoem();
      return;
    }
    if (mouseX >= 100 && mouseX < 150) {
      quietMode = !quietMode;
      return;
    }
  } else if (!quietMode) {
    generatePoem();
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

function fileClear() {
  for (let i = 0; i < poem.length; i++) {
    poem[i] = "";
  }
}
