//Implement a function which convert the given boolean value into its string representation.


//my solution
function booleanToString(b){
    //your code here
    return b === true ? "true" : "false";
  } 

//most popular solution
function booleanToString(b){
    return b.toString();
  }