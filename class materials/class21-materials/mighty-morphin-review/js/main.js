// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "christmas"
console.log(favHoliday.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let otherThing = "fire"
alert(otherThing.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeFive(a, b, c, d, e){
    let res = 100-(a+b+c+d+e)
    alert(Math.abs(res)) 
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takeThree(a, b, c){
    let highest = Math.max(a, b, c)
    let lowest = Math.min(a, b, c)
    console.log(highest + " " + lowest)
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails(){
//     let result = Math.random()
//     if(result < .5){
//         return "heads"
//     }else{
//         return "tails"
//     }
// }

const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'

//console.log(headsOrTails())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipFlipFlipadelphia(n){
    for(let i = 1; i <= n; i++){
        let result = headsOrTails()
        console.log(result)
    }
}

flipFlipFlipadelphia(10)