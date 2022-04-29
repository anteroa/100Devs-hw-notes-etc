//Create an espresso machine class that makes machines with 4 properties and 3 methods
class Machine {
    constructor(name, weight, purpose, status) {
        this.name = name;
        this.weight = weight;
        this.purpose = purpose;
        this.status = status;
    }

    turnOn() {
        console.log("Machine turned on")
    }

    turnOff() {
        console.log("Machine turned off")
    }

    selfDestruct() {
        console.log("Selfdestruction initiated, run away from machine!")
    }
}

class EspressoMachine {
    constructor(color, make, model, price){
        this.color = color;
        this.make = make;
        this.model = model;
        this.price = price;
    }

    turnOn(){
        console.log('Good day , Im now on!')
    }

    steam(){
        console.log('SUMMERRR SAAAAAALE')
    }

    brew(){
        console.log('Good stuff coming your way')
    }

}

let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400)