let time1 = 0;
let time2 = 0;
let timeIncr1 = .07;
let timeIncr2 = timeIncr1;
let v = 0;
let p2 = 0;

let starX = [];
let starY = [];
let starSize = [];

let photon = p2;

function preload() {
  img = loadImage('space1.png');
}

function setup() {
  createCanvas(600, 400);
  slider = createSlider(0, 1, 0, 0.001);
  slider.position(200, 180);
  slider.style('width', '300px');
  
  button = createButton('reset clocks');
  button.position(0, 0);
  button.mousePressed(resetClock);

  for (let i = 0; i < 40; i++) {
    starX[i] = random(1, 1200);
    starY[i] = random(0, 199);
    starSize[i] = random(2, 7);
  }

}

function draw() {
  background(255);
  line(0, 200, 600, 200);

  drawStars(v);
  
  fill(0);
  v = slider.value();
  text(v, 500, 180);

  fill(0,0,255);
  let len1 = 300 * sqrt(1 - sq(v));
  image(img,200,220,300,150);
  image(img,200,20,len1+1,150);
  
  //rect(200, 300, 300, 20);
  //rect(200, 100, len1, 20);

  time1 = time1 + timeIncr1;
  timeIncr2 = timeIncr1 * sqrt(1 - sq(v));
  time2 = time2 + timeIncr2;
  p2 = p2 + v;



  drawClock(time1, 100, 300, 100);
  drawClock(time2, 100, 100, 100);
  


}

function drawClock(cTime, cx, cy, cSize) {
  fill(255);
  ellipse(cx, cy, cSize, cSize);
  let ang = cTime+3*PI/2;
  line(cx, cy, cx + cSize / 2 * cos(ang), cy + cSize / 2 * sin(ang));
  fill(0);
  text(nf(cTime,4,2),cx-15,cy+cSize/2+10);
}

function drawStars(vel) {
   for (let i = 0; i < 40; i++) {
    ellipse(starX[i],starY[i],starSize[i],starSize[i]);
    starX[i] -= 15*v;
    if(starX[i]<-10){
      starX[i] = random(601, 1200);
    }
    
  } 
}

function resetClock() {
  time1=0;
  time2=0;
}