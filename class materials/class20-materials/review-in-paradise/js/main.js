// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = ""
favFood = "tacos"
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newOne = "this"
alert(newOne[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function doThis(a, b, c){
    alert((a/b)*c)
}
doThis(1, 2, 3)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRootIt(num){
    console.log(Math.cbrt(num).toFixed(4));
}

cubeRootIt(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month) {
    if(month.toLowerCase() == "june" || month.toLowerCase() == "july" || month.toLowerCase() == "august"){
        alert("YAY")
    }else{
        alert("Booo")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function logAllButFive(num){
    for(let i = 1; i <= num; i++){
        if(i % 5 != 0){
            console.log(i)
        }
    }
}

logAllButFive(21)