
document.querySelector('#clickMe').addEventListener('click', coinFlip)

function coinFlip(){
  let face = ''
  let randomNumber = Math.random() * 2;

  if(randomNumber > 1){
    face = "Heads"
    document.querySelector('#coinImg').innerHTML = '<img id="" src="./img/heads.png" alt="">'
  }else{
    face = "Tails"
    document.querySelector('#coinImg').innerHTML = '<img id="" src="./img/tails.png" alt="">'
  }
  document.querySelector("#coinFace").innerHTML = face
  console.log(randomNumber);
} 