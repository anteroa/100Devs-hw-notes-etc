//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
//Construction functions start with a capital letter
function MakeFighter(fName, fSpecial, fSpeed, fStrength){
    this.name = fName, 
    this.special = fSpecial,
    this.speed = fSpeed,
    this.strength = fStrength

    this.block = function(){
        console.log('blocking')
    }
    this.jump = function(){
        console.log('jumping')
    }
    this.doSpecial = function(){
        console.log( this.special + '!!!!!!')
    }
}

let ryu = new MakeFighter('Ryu', 'Hadouken', 40, 50)
let dhalsim = new MakeFighter('Dhalsim', 'Yoga Float', 60, 30)
let zangief = new MakeFighter('Zangief',  'Flying Body Press', 20, 80)