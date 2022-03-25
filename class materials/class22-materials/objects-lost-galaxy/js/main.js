//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.color = "black"
mouse.weight = "20 grams"
mouse.brand = "Razer"
mouse.wireless = false

mouse.leftClick = function(){
    console.log("left click")
}

mouse.rightClick = function(){
    console.log("right click")
}

mouse.scroll = function(){
    console.log("JUMP JUMP JUMP")
}


//Constructor for the above object, much better...
/**
function makeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake, 
    this.model = carModel,
    this.color = carColor,
    this.doors = numOfDoors

    this.honk = function(){
        alert('BEEP BEEP FUCKER')
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}
 */
