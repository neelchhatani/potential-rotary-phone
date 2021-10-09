function setup() {
canvas = createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.hide();
   canvas.position(500,200);
  }
  
  function draw() {
   fill(122,0,0);
  stroke(0.128,0);
   circle(40,50,70,);
  rect(30, 40, 10, 300);
  circle(40,350,70);
  circle(350,350,70);
  circle(350,50,70);
  rect(350,40,10,300);
  rect(40,50,300,10);
  rect(40,350,300,10);
  image(video,100,100,200,200);
  }
  function take_snapshot(){
save('pro.png');
  }