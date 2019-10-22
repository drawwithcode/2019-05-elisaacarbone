var speech = new p5.Speech();
var mic = new p5.AudioIn();

var capture;

var button;
var complimentList = ["Your family only loves you beacuse they have to", "You're doing poorly today", "Don't be sad, your life will probably get worse", "You're someone's reason to smile because you're a joke", "The first step toward failure is trying"];

var image1;
var image2;
var image3;
var image4;

function preload() {
  avara = loadFont("assets/Avara-Bold.otf")
  image1 = loadImage("./assets/clown.png");
  image2 = loadImage("./assets/thumb.png");
  image3 = loadImage("./assets/facepalm.png");
  image4 = loadImage("./assets/tear.png");
  image5 = loadImage("./assets/toiletpaper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  speech.start;
  mic.start();

	capture = createCapture(VIDEO);
	capture.size(640, 480);
	capture.hide();

  button = new Button;

}

function draw() {
  background("#FF99C8");

  emoji();

  imageMode(CENTER,CENTER);
  image(image5, width/2, height/2, image5.width * 2.5, image5.height * 2.5);

  button.display();

  banner();

	var myImage = capture.loadPixels();
  imageMode(CENTER, CENTER);
	image(myImage, width/2, height/2, 640, 480);

  mirror();
}

function banner() {
  rectMode(CENTER);
  strokeWeight(5);
  stroke("#D0F4DE");
  fill("#623CEA");
  rect(width/2, height/2 - 350, 450, 60, 15);
  textAlign(CENTER, CENTER);
  noStroke();
  fill("#FF99C8");
  textFont(avara);
  textSize(28);
  text("DEMOTIVATION MIRROR  :(", width/2 - 2, height/2 - 350);
}

function mirror() {
  rectMode(CENTER);
  noStroke();

  fill(169, 222, 249, 90);
  rect(width/2, height/2, 640, 480);

  fill("#FCF6BD");
  rect(width/2, height/2 - 265, 740, 50, 20);
  rect(width/2, height/2 + 265, 740, 50, 20);
  rect(width/2 - 345, height/2, 50, 520);
  rect(width/2 + 345, height/2, 50, 520);

  var volume = mic.getLevel();
  console.log(volume);
  strokeWeight(5);
  stroke("#D0F4DE");
  fill("#623CEA");
  ellipse(width/2 - 340, height/2 - 260, 15 + volume*30);
  ellipse(width/2 + 340, height/2 - 260, 15 + volume*30);
  ellipse(width/2 - 340, height/2 + 260, 15 + volume*30);
  ellipse(width/2 + 340, height/2 + 260, 15 + volume*30);
}

function mousePressed() {
  button.clicked();
}

function Button() {
  this.x = width/2;
  this.y = height/2 + 360;
  this.diam = 110;

  this.display = function() {
    rectMode(CENTER);
    strokeWeight(5);
    stroke("#D0F4DE");
    fill("#623CEA");
    ellipse(this.x, this.y, this.diam);

    textAlign(CENTER, CENTER);
    noStroke();
    fill("#FF99C8");
    textFont(avara);
    textSize(22);
    text('PRESS', this.x, this.y - 8);
    text('ME', this.x, this.y + 15);
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    var index = Math.round(random() * (complimentList.length - 1));
    if (d < this.diam / 2) {
      speech.setVoice("Google US English");
      speech.speak(complimentList[index]);
    }
  }

}

function emoji() {
  var a = 30;
  for (x = a; x < width; x += 8*a) {
    for (y = a; y < height + a; y += 2*a) {
      image(image1, x, y, image1.width/4, image1.height/4);
    }
  }

  for (x = 3*a; x < width; x += 8*a) {
    for (y = a; y < height + a; y += 2*a) {
      image(image2, x, y, image2.width/4, image2.height/4);
    }
  }

  for (x = 5*a; x < width; x += 8*a) {
    for (y = a; y < height + a; y += 2*a) {
      image(image3, x, y, image3.width/4, image3.height/4);
    }
  }

  for (x = 7*a; x < width; x += 8*a) {
    for (y = a; y < height + a; y += 2*a) {
      image(image4, x, y, image4.width/4, image4.height/4);
    }
  }
}
