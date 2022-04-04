// *Variables*
// Create a variable and console log the value
let thing = 5
console.log(thing)
// Create a variable, add 10 to it, and alert the value
let stuffs = 0
stuffs + 10
alert(stuffs)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(a, b, c, d){
    alert(a - b - c - d)
}
// Create a function that divides one number by another and returns the remainder
function div(a, b){
    return(a % b)
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jum(a, b){
    if (a + b){
        alert('Jumanji')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult(a, b, c){
    if((a * b * c) % 3 == 0){
        alert('ZEBRA')
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function looper(word, num) {
    for(let i = 0; i < num; i++){
        console.log(word)
    }
}