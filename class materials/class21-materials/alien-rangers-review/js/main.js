//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Bobs Burgers', 'The Simpsons', 'Rugrats']
for(let i =0 ; i < tvShows.length; i++){
    console.log(tvShows[i])
}

tvShows.forEach( show => console.log( show ))

//Create and array of numbers
let nums = [1, 2, 3, 4, 5, 21, 55, 96, 610]
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = arr => arr.filter( n => n % 2 === 0 )

console.log(onlyEvens(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr){
    let sorted = arr.sort((a, b) => a-b)
    alert( arr[1] + arr[ sorted.length - 2])
}

takeArr(nums)