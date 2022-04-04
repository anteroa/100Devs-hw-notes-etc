//--- Easy
//create a variable and assign it a number
let barnacle = 25
//minus 10 from that number
barnacle - 10
//print that number to the console
console.log(barnacle)


//--- Medium
//create a variable that holds a value from the input
let inputFromUser = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
inputFromUser = inputFromUser + 25
//alert that number
alert(inputFromUser)


//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', sum)

function sum(){
    console.log(Number(inputFromUser) + barnacle)
}