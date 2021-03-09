const Car = function(mark, vmax, color){
    this.mark = mark
    this.vmax = vmax
    this.color = color
}

const audi = new Car("Audi", 250, "Czarny")

console.log(audi.mark)
console.log(audi.color)
audi.color = "czerowny"
console.log(audi.color)
