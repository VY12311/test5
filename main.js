noseX = 200;
noseY = 200;

function preload() {
  imagehat = "hat.png"
  imagemustache = "mustache.jfif"
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
  hat = loadImage(imagehat);
  mustache = loadImage(imagemustache);
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(475, 475);
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, ModelLoaded);
  poseNet.on('pose',gotPoses);

  tint_color = "";
}

function ModelLoaded() {
    console.log("Pose net is Intizalied");
}

function gotPoses(results)
{
  if(results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose X =" + noseX);
    console.log("Nose Y =" + noseY);
  }
}
function draw() {
  image(video, 50, 50, 300, 300);
  tint(tint_color);

  fill(255,0,0);
  stroke(255,0,0);
  circle(50,350,30);

  fill(255,0,0);
  stroke(255,0,0);
  circle(350,50,30);

  fill(255,0,0);
  stroke(255,0,0);
  circle(50,50,30);

  fill(255,0,0);
  stroke(255,0,0);
  circle(350,350,30);

  fill(21, 255, 0);
  stroke(255,0,0);
  rect(350,375,30,-350);

  fill(21, 255, 0);
  stroke(255,0,0);
  rect(390,390,30,30);

  fill(21, 255, 0);
  stroke(255,0,0);
  rect(375,350,-350,30);

  fill(21, 255, 0);
  stroke(255,0,0);
  rect(350,25,-325,30);

  fill(21, 255, 0);
  stroke(255,0,0);
  rect(25,350,30,-325);

  fill(255,0,0);
  stroke(255,0,0);
  circle(375,375,30,30);

  fill(255,0,0);
  stroke(255,0,0);
  circle(25,375,30,30);

  fill(255,0,0);
  stroke(255,0,0);
  circle(375,25,30,30);

  fill(255,0,0);
  stroke(255,0,0);
  circle(25,25,30,30);

  fill(21, 255, 0);
  stroke(255,0,0);
  rect(-20,390,30,30);

  fill(21, 255, 0);
  stroke(255,0,0);
  rect(390,-20,30,30);

  fill(21, 255, 0);
  stroke(255,0,0);
  rect(-20,-20,30,30);

}

function Add_clown() {
  clown = image(clown_nose, noseX, noseY, 50, 50);
}

function Add_hat() {
  hati = image(hat,noseX,noseY,50,100)
}
function Add_mustache() {

  mustachei = "Next_project"
}

function take_snapshot(){
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}
