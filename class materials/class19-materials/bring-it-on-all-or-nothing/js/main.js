// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let ok = false
alert(ok)

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor  = "green";
console.log(favColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function sum(a,b,c,d){
    return (a + b + c) / d;
}
sum(1, 2, 5, 4)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function powah(a, b){
    return Math.pow(a, b);
}
powah(2, 4)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function alertOrLog(b, str){
    if(b){
        alert(str)
    }else{
        console.log(str)
    }

    //b ? alert(str) : console.log(str);

}

// add ternary operator version of the above function


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzbuzz(n){
    let answers = []
    let fizz= "Fizz"
    let buzz= "Buzz"
    
    for(let i = 1; i <= n; i++){
        
         if (i % 15 == 0){
            console.log(fizz+buzz)
        }else if(i % 3 == 0){
            console.log(fizz)
        }else if(i % 5 == 0){
            console.log(buzz)
        }else{
            console.log(String(i))
        }
    }
}

fizzbuzz(10);