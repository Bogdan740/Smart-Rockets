let target;
let rockets;
let targetR

function setup(){
    createCanvas(windowWidth,windowHeight);
    target = createVector(width/2,100);
    rockets = new Rockets(100)
    targetR = 50

}

function draw(){
    background(51);
    target = createVector(mouseX,mouseY)
    
  
    rockets.update();
    
    if(frameCount % lifespan == 0){
        rockets.evolve();
        }
    
    noStroke();
    fill(255,100,0,150)
    ellipse(target.x,target.y,targetR*2)

}