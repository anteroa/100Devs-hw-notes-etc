/**You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!". */

//My solution
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin == true){
      sharkSpeed = sharkSpeed/2
      if(cT(pontoonDistance, youSpeed) <= cT(sharkDistance, sharkSpeed)){
        return "Alive!"
      }else{
        return "Shark Bait!"
      }
    }else if(dolphin == false){
      if(cT(pontoonDistance, youSpeed) <= cT(sharkDistance, sharkSpeed)){
        return "Alive!"
      }else{
        return "Shark Bait!"
      }
    }
  }
  
  function cT(distance, speed){
    return distance/speed;
  }

//Most upvoted
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
      sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
  }