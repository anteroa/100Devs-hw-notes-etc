//First task's answer is no, there is no difference in behaviour

//Second task function, original
/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
*/
//Second task function, with conditional(ternary) oprator
/*
function checkAge(age) {
    return (age > 18) ? false : confirm('Did parents allow you?')
}
*/
//Second task function, with || (OR) operator.
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?')
}

//Third task, function min(a, b)
function min (a, b) {
    if(a > b) {
        return a
    } //else
    return b
}


//Fourth task, pow(x, n)
function pow(x, n) {
    alert (x ** n);
}

//Additional code for testing the last task

