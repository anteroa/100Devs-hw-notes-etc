//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(num1, num2){
    let diff = 0
    if(num1 > num2){
        diff = num1 - num2
    }else if(num1 > num2){
        diff = num1 - num2
    }else{
        alert("there was an issue")
    }
    alert(diff)

    //alert(num1 - num2)
}
//create a function that divides three numbers and console logs the quotient
function div(num1, num2, num3){
    let quot = num1 / num2 / num3
    console.log(quot)
}
//create a function that multiplys three numbers and returns the product
function (num1, num2, num3){
    let prod = num1 * num2 * num3
    alert(prod)
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function (num1, num2, num3){
    let res = (num1 + num2) / num3 
    return res
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
