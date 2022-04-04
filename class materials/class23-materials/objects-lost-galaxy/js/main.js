//Create a dog object that has four properties and three methods
let dog = {};

dog.color = "brown"
dog.breed = "chihuahua"
dog.size = "pocket size"
dog.attitude = "bad"
dog.bark = function() {
    dog.attitude = "worse"
    console.log('woof');
}

dog.jump = function(){
    console.log("blast off")
}

dog.fetch = function(){
    console.log("zoooooooom")
}