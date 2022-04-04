/** 1. Write a loop that makes seven calls to console.log to output the following triangle: */
let char1 = "#"
let result = ''
for(let i = 0; i < 8; i++){
    let len = i
    result = new Array(len + 1).join( char1 );
    console.log(result)
}
//Solution from the book... yikes mine was long af lol
/*
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/


/** 2.  FizzBuzz, on leetcode */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let answers = []
    let fizz= "Fizz"
    let buzz= "Buzz"
    
    for(let i = 1; i <= n; i++){
        
         if (i % 15 == 0){
            answers.push(fizz+buzz)
        }else if(i % 3 == 0){
            answers.push(fizz)
        }else if(i % 5 == 0){
            answers.push(buzz)
        }else{
            answers.push(String(i))
        }
    }
    
    return answers;
};

/** 3. Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/
// Your code here
let black = "#", white = " "

for(let i = 0; i < 8; i++){
  	let line = ""
    if(i % 2 == 0){
        for(let x = 0; x < 8; x++){
            if((x % 2) == 0){
                line += white 
            }else{
                line += black
            }
        }
    }else{
        for(let x = 0; x < 8; x++){
            if((x % 2) == 0){
                line += black 
            }else{
                line += white
            }
        }
    }
    console.log(line)
}