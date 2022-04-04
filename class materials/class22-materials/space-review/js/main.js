//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNum = [40, 20, 70, 30, 50]
//let arrNum = [1, 2, 3, 4, 5]
let sum = 0

//forEach solution
arrNum.forEach(x => sum += x);

//reduce solution
//sum = arrNum.reduce( (acc, c) => acc + c, 0 )

alert(Number(sum))






//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let nums = [4,2,7,3,5]
function squareNums(numArr){
    let numSquared = numArr.map( n => n * n)
    return numSquared
}
squareNums(nums);




//Create a function that takes string
//Print the reverse of that string to the console
let power = "P-P-Power Rangers!"
function reverseString(str){
    console.log(str.split("").reverse().join(""))
}

reverseString(power)





//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromCheck(str){
    if(reverseString(str) == str){
        alert("Your string is a palidrome, cool!")
    }else{
        alert("Your string is not a palidrome, uncool.")
    }
}

//Short version from office hours, arrow function and ternary operator
const isPalindrome = s => s === str.split("").reverse().join("") ? alert('Yes') : alert('No');

palindromCheck(power)
isPalindrome(power)


//map vs forEach
//need a new array? forEach