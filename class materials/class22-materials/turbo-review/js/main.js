// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " Modelo "
console.log(favDrink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let mWords  = "the thing is"
//let res = mWords.includes("apple")
if(mWords.search("apple") != -1){
    console.log("yes")
} else {
    console.log("no")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let rps = ["rock", "paper", "scissors"]
    let num = Math.floor(Math.random() * 3)
    console.log(rps[num])
}
let pChoice = rockPaperScissors()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function getChoice(playerChoice){
    let botChoice = rockPaperScissors()
    if((playerChoice == "rock" && botChoice == "scissors" ) ||
             (playerChoice == "paper" && botChoice == "rock" ) || 
             (playerChoice == "scissors" && botChoice == "paper" )){
        console.log("You win")
    }else if(botChoice == playerChoice){
        console.log("You tied")
    }else{
        console.log("You lost")
    }
}
console.log(getChoice(pChoice))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr){
    arr.forEach( choice => getChoice(choice) )
}

//playGameXTimes(['rock', 'paper', 'scissors'])
