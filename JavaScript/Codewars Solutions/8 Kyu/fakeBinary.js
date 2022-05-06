//Given a string of digits, you should replace any digit below 5 with '0' 
//and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let rA = []
    for(let i = 0; i < x.length; i++){
      if(x[i] >= 5){
        rA.push(1)
      }else{
        rA.push(0)
      }
    }
    let str = rA.join('');
    return str;
  }