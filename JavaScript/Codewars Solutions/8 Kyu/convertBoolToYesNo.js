//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//my solution
function boolToWord( bool ){
    //...
    if (bool == true) 
    {
      return 'Yes';
    } else {
      return 'No';
    };
  };

//most popular solution
function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }