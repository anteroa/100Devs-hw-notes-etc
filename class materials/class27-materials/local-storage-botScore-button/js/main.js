//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem('botScore')){
    //set score to 0
    localStorage.setItem('botScore', 0);
}

//event listener linked to the adding function
document.querySelector('button').addEventListener('click', addAnothaOne)


//adding function 
function addAnothaOne(){
    let botScoreVal = localStorage.getItem('botScore')
    botScoreVal ++
    localStorage.setItem('botScore', botScoreVal)
}