//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseList(list){
    console.log(list.reverse());
}

reverseList(['bulba', 'pika', 'butter'])
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function checkThis(a, b){
    let squaresOfA = [] 
    let cubesOfB = []
    a.forEach(element => {
        squaresOfA.push(element * element)
    });
    
    b.forEach(element => {
        cubesOfB.push(element * element * element)
    });
    
    let sumA, sumB = 0

    for(let i = 0; i < squaresOfA.length; i++){
        sumA += squaresOfA[i];
    }

    for(let i = 0; i < cubesOfB.length; i++){
        sumB += cubesOfB[i];
    }

    if(sumA > sumB){
        return true
    }else{
        return false
    }

}
//console.log(checkThis([100, 6, 6],[1, 1]))//doesn't work


function compareSquareAndCube(a, b){
    return a.reduce((acc,c) => acc + Math.pow(c, 2)) > b.reduce((acc, c) => acc + Math.pow(c, 3));
}

//console.log(compareSquareAndCube([2, 2, 2],[2, 2, 2]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function returnArrOfMultiples(arr){
    arr.forEach()
}

function isMultiple(arr){
    return arr.filter((elem, i) => e % i === 0)
}
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0 )//the 0 is the value of the accumulator at the start of the reduction
}

console.log(sumOfValues(['5', 3, '2', 1]))