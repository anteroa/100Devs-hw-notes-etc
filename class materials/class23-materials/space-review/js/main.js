//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numArr = [10,20,30,40,50]
let sum = numArr.reduce(function (previousValue, currentValue) {
    return previousValue += currentValue;
});
alert (sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = nums => numArr.map(num => num**2)
console.log(newArr(newArr))
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str){
    return str.split("").reverse().join("")
    //console.log(str.split("").reverse().join(""))
}

reverseString("cooped up")
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPalindrome(str){
    if(str == reverseString(str)){
        alert("Yes")
    }else{
        alert("No")
    }
}

checkPalindrome("stts")