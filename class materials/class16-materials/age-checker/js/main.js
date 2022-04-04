//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


function check(){
    let val = document.querySelector('#danceDanceRevolution').value

    if(val < 16){
        document.querySelector('p').innerText = "You cant drive"
    }else if(val < 18){
        document.querySelector('p').innerText = "You can't hate from inside the club because you can't even get in"
    }else if(val < 21){
        document.querySelector('p').innerText = "You can't drink"
    }else if(val < 25){
        document.querySelector('p').innerText = "You can't rent cars affodably"
    }else if(val < 30){
        document.querySelector('p').innerText = "You can't rent fancy cars affordably"
    }else if(val > 30){
        document.querySelector('p').innerText = "There is nothing left to look forward to"
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
const h1Holder = document.querySelector('h1')
h1Holder.addEventListener('click', check)