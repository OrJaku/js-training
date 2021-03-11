class Car{
 constructor(mark, vmax, color){
    this.mark = mark
    this.vmax = vmax
    this.color = color
    this.kW = 100
    }
    power(){
        console.log(`Power: ${this.kW*1.4}`)
    }
}

const audi = new Car("Audi", 250, "Czarny")

console.log(audi.mark)
console.log(audi.color)
audi.color = "czerowny"
console.log(audi.color)
audi.power()
