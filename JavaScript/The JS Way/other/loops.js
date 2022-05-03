/* The following are excercises from 
https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md

Try to code each exercise twice, once with a while loop and the other with a for,
to see for yourself which one is the most appropriate.
*/

//Write a program that launches a carousel for 10 turns, showing the turn number each time.
//WHILE version
/*
let i = 0
while( i < 10){
    console.log(i)
    i++
}
 */

//FOR version
/*
for (let i=0; i<10; i++){
    console.log(i)
}
*/



/*
FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
*/

let fizz = " fizz"
let buzz = " buzz"

for(i = 1; i < 101; i++){
    if(i % 3 == 0){
        console.log(i + fizz)
    }else if(i % 5 == 0){
        console.log(i + buzz)
    }else{
        console.log(i)
    }
}