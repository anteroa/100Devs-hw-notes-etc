// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentenceVar = "We will rock you!"
if(sentenceVar[sentenceVar.length - 1] == "?"){
    alert("sentence is a question")
}else{
    alert("sentence is not a question")
}
//solution fom class, uses endsWith
alert(sentenceVar.endsWith("?"))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let otherSentence = "I am looking for jr.dev positions."
if(otherSentence.includes("jr.dev") == true){
    let res = otherSentence.replace("jr.dev", "software engineer")
    console.log(res)
}else{
    console.log(otherSentence)
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps(){
    let rand = Math.floor(Math.random()*10/3)
    if(rand == 1){
        return "paper";
    }else if(rand == 2){
        return "scissors";
    }else{
        return "rock";
    }
}

console.log(rps())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice){
    let botChoice = rockPaperScissors()
    if( (playerChoice == 'rock' && botChoice == 'scissors') ||
    (playerChoice == 'scissors' && botChoice == 'paper') || 
    (playerChoice == 'paper' && botChoice == 'rock') ){
        console.log('winner')
    }else if( playerChoice == botChoice){
        console.log('tied')
    }else{
        console.log('lost')
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
