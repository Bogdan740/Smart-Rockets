class Rockets{
    constructor(amount){
        this.rockets = [];
        for(let i = 0; i < amount; i++){
            this.rockets.push(new Rocket())
        }
    }
    update(){
        for(let i = 0; i < this.rockets.length; i++){
            this.rockets[i].update()
            this.rockets[i].show()
        }

    }
    evolve(){
        let genepool = [];
        for(let i = 0; i < this.rockets.length; i++){
            let fertility = floor(map(this.rockets[i].fitness,0,1,0,1000))
            for(let j = 0; j < fertility; j++){
                genepool.push(this.rockets[i])

            }
        }
        let newDNA = []
        for(let i = 0; i < this.rockets.length; i++){
            let r1 = random(genepool);
            let r2 = random(genepool);
            let r3 = r1.breed(r2)
            newDNA.push(r3)
        }
        //let newRockets = []
        for(let i =0; i < newDNA.length ; i++){
            this.rockets[i] = new Rocket(newDNA[i])
        }
    

    }
}