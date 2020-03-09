let lifespan = 50;
class Rocket{
    constructor(dna){
        this.pos = createVector(width/2,height-50);
        this.counter = 0;
        this.fitness = 0;
        if(dna){
            this.dna = dna
        }else{
            this.dna = []
            for(let i = 0; i < lifespan ; i++){
                this.dna.push(createVector(random(-1,1),random(-1,1)))
            }

        }
        this.crashed = false;
        this.targetAchieved = false;
    }
    update(){
        if(!this.crashed && this.counter < lifespan && !(this.targetAchieved)){
            this.pos.add(this.dna[this.counter].setMag(25));
            this.counter++
            let prox = dist(this.pos.x,this.pos.y,target.x,target.y);
            this.fitness = map(prox,0,height-target.y,1,0)
            if(this.fitness < 0){
                this.fitness = 0;
            }
        }
        if(this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height){
            this.crashed = true;

        }
        let targetDist = dist(this.pos.x,this.pos.y,target.x,target.y)
        if(targetDist < targetR){
            this.targetAchieved = true;
            this.fitness = 100       }

    }
    show(){
        noStroke();
        fill(0,255,0,100);
        ellipse(this.pos.x,this.pos.y,20);

    }
    breed(other){
        let newDNA = []
        for(let i =0; i < this.dna.length;i ++){
            let chooser = random();
            if(chooser < 0.5){
                newDNA.push(this.dna[i])
            }else{
                newDNA.push(other.dna[i])
            }
        }
        for(let i = 0; i < newDNA.length; i++){
            let chooser = random()
            if(chooser < 0.05){
                newDNA[i] = createVector(random(-1,1),random(-1,1))
            }
        }
        return newDNA
    }

}