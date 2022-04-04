//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function returnEvens(arr){
    let resultingArr = []
    for(let i = 1; i < arr.length; i++){
        if(i % 2 == 0){
            resultingArr.push(i)
        }
    }

    console.log(resultingArr)
}

returnEvens([1,2,3,4,5,6,7,8,9])
