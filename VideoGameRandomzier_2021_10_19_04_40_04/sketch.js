//What Video Game Will You Play!
let games = [{
  name: "Call of Duty: Bravo Six, Going Dark",
}, {
  name: "Fifa: GOOAALL!",
}, {
  name: "Minecraft: Beware of Creepers",
}, {
  name: "Snake: Don't get Bit ;)",
}, {
  name: "Sims: You, Are, God",
}];

let RandomIndex;
let animating = false;
let imageCounter = 0;
let button;
let cnv;


function preload() {

  for (let i = 0; i <= 4; i++) {
    games[i] = loadImage("assets/game_" + i + '.jpeg')
    console.log(games);
  }

}

function setup() {
  cnv = createCanvas(560, 560);
  cnv.parent("#canvasDiv");
  background(200);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(32);
  fill(0);
  imageMode(CENTER);
  frameRate(8);

  text("What's your Destined Game!", 270, 100);

  text("Click to find out Player 1", 260, 500);

  image(games[imageCounter], width / 2, height / 2);

  button = select('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");


}

function draw() {

  if (animating == true) {
    clear();
    image(games[imageCounter], width / 2 , height / 2);

    if (imageCounter < games.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;

    }
  }

}

function randomizer() {
  animating = false;
  if (games[0]) {
    clear();
    randomIndex = int(random(games.length));
    image(random(games), width / 2, height / 2);
    text(games[randomIndex].name, width / 2, height - 50);
    games.splice(randomIndex, 1);
    text("Insert Coins to Continue", 260, 500);


  } else {

  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
  background(200);
  text("Game over Thanks for Playing!", 283, 100);
}
